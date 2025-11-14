import React from "react";
import type { Product } from "../types";


interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <h2 className="font-semibold text-lg mb-2">{product.title}</h2>
      <p className="text-gray-600 mb-2">Price: ${product.price}</p>
      <p className="text-gray-500">Available: {product.qty}</p>
    </div>
  );
};

export default ProductCard;

