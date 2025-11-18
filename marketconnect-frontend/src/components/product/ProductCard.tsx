import React from "react";
import { Product } from "../../types/Product";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
      <img
        src={product.images[0] || "https://via.placeholder.com/300"}
        alt={product.title}
        className="w-full h-40 object-cover rounded mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{product.title}</h2>
      <p className="text-green-600 font-semibold">Price: ${product.price}</p>
      <p className="text-sm text-gray-600">Available: {product.qty}</p>
      <p className="text-sm text-gray-500 mt-2">{product.description}</p>
    </div>
  );
};

export default ProductCard;

