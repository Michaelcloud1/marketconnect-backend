import React from "react";
import ProductCard from "../components/product/ProductCard";
import type { Product } from "../types/Product";

const demoProducts: Product[] = [
  {
    id: "p1",
    title: "Demo Product A",
    price: 1200,
    qty: 10,
    images: [], // always an array
    description: "This is a sample description for Product A",
    ownerId: "owner1",
  },
  {
    id: "p2",
    title: "Demo Product B",
    price: 800,
    qty: 5,
    images: [],
    description: "This is a sample description for Product B",
    ownerId: "owner2",
  },
];

const Home: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to MarketConnect</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {demoProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={{
              ...product,
              images: product.images ?? [], // ensure always an array
              description: product.description ?? "No description",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
