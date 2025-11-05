import mongoose from 'mongoose';

const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    ownerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String },
    category: { 
      type: String, 
      required: true,
      enum: ['Electronics', 'Fashion', 'Home', 'Beauty', 'Sports', 'Other']
    },
    price: { 
      amount: { type: Number, required: true },
      currency: { type: String, default: 'USD' }
    },
    quantityAvailable: { type: Number, required: true, min: 0 },
    images: [String],
    tags: [String],
    specifications: [{
      name: String,
      value: String
    }],
    minOrderQuantity: { type: Number, default: 1 },
    status: {
      type: String,
      enum: ['active', 'draft', 'outOfStock'],
      default: 'active'
    }
  },
  { 
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Indexes for efficient queries
ProductSchema.index({ title: 'text', description: 'text', tags: 1 });
ProductSchema.index({ category: 1 });
ProductSchema.index({ 'price.amount': 1 });
ProductSchema.index({ createdAt: -1 });
ProductSchema.index({ status: 1 });

// Virtual for formatted price
ProductSchema.virtual('formattedPrice').get(function() {
  return `${this.price.currency} ${this.price.amount.toFixed(2)}`;
});

export default mongoose.model('Product', ProductSchema);
