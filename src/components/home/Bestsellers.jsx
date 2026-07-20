import React from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/common/ProductCard";

export const Bestsellers = () => {
  const bestsellers = PRODUCTS.filter((p) => p.bestseller).slice(0, 5);

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Curated for You
            </h2>
            <p className="text-4xl md:text-5xl font-serif">
              Our Bestsellers
            </p>
          </div>
          <Link 
            to="/shop" 
            className="text-xs uppercase tracking-widest border-b border-black pb-1 hover:opacity-60 transition-opacity"
          >
            Shop All Jewelry
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
