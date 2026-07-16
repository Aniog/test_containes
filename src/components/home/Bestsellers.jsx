import React from "react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";

const Bestsellers = () => {
  // Show first 5 products as bestsellers
  const bestsellers = products.slice(0, 5);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex items-end justify-between mb-10">
        <div>
          <span className="text-xs tracking-[3px] text-[#B89778]">DISCOVER</span>
          <h2 className="font-serif text-4xl tracking-[1px] mt-1">Bestsellers</h2>
        </div>
        <Link to="/shop" className="hidden md:block">
          <Button variant="link" className="text-sm tracking-[1.5px]">
            VIEW ALL →
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-10 text-center md:hidden">
        <Link to="/shop">
          <Button variant="outline">VIEW ALL JEWELRY</Button>
        </Link>
      </div>
    </section>
  );
};

export default Bestsellers;
