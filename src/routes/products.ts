import { Router } from 'express';
import Product from '../models/Product';
import { auth, requireRole } from '../middleware/auth';
import type { AuthRequest } from '../middleware/auth';

const router = Router();

// Create product (business owners only)
router.post('/', auth, requireRole(['business']), async (req: AuthRequest, res) => {
  try {
    const product = await Product.create({
      ...req.body,
      ownerId: req.user?.id
    });
    res.status(201).json(product);
  } catch (err) {
    console.error('Create product error:', err);
    res.status(400).json({ error: 'Failed to create product' });
  }
});

// List products with search and filters
router.get('/', async (req, res) => {
  try {
    const { 
      search, 
      category,
      minPrice,
      maxPrice,
      ownerId,
      limit = 50,
      page = 1
    } = req.query;

    const query: any = {};

    // Text search
    if (search) {
      query.$text = { $search: search as string };
    }

    // Filters
    if (category) {
      query.category = category;
    }
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }
    if (ownerId) {
      query.ownerId = ownerId;
    }

    const skip = (Number(page) - 1) * Number(limit);

    const [products, total] = await Promise.all([
      Product.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(Number(limit))
        .populate('ownerId', 'name companyName')
        .lean(),
      Product.countDocuments(query)
    ]);

    res.json({
      products,
      pagination: {
        total,
        page: Number(page),
        pages: Math.ceil(total / Number(limit))
      }
    });
  } catch (err) {
    console.error('List products error:', err);
    res.status(500).json({ error: 'Failed to list products' });
  }
});

// Get single product
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate('ownerId', 'name companyName')
      .lean();
    
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    res.json(product);
  } catch (err) {
    console.error('Get product error:', err);
    res.status(500).json({ error: 'Failed to get product' });
  }
});

// Update product (owner only)
router.put('/:id', auth, async (req: AuthRequest, res) => {
  try {
    const product = await Product.findById(req.params.id);
    
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Check ownership
    if (product.ownerId.toString() !== req.user?.id) {
      return res.status(403).json({ error: 'Not authorized to update this product' });
    }

    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    ).populate('ownerId', 'name companyName');

    res.json(updated);
  } catch (err) {
    console.error('Update product error:', err);
    res.status(500).json({ error: 'Failed to update product' });
  }
});

// Delete product (owner only)
router.delete('/:id', auth, async (req: AuthRequest, res) => {
  try {
    const product = await Product.findById(req.params.id);
    
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Check ownership
    if (product.ownerId.toString() !== req.user?.id) {
      return res.status(403).json({ error: 'Not authorized to delete this product' });
    }

    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    console.error('Delete product error:', err);
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

export default router;
