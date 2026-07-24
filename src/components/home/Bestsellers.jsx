import React from "react";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";

const Bestsellers = () => {
  const bestsellers = products.filter((p) => p.badge === "Bestseller").slice(0, 5);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="font-serif text-2xl md:text-3xl text-gray-900">Bestsellers</h2>
          <p className="mt-2 text-sm text-gray-600">The pieces our community wears most.</p>
        </div>
        <a href="/shop" className="hidden md:inline-flex text-sm font-medium text-gold-700 hover:text-gold-800">
          View all
        </a>
      </div>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-8 md:hidden text-center">
        <a href="/shop" className="inline-flex text-sm font-medium text-gold-700 hover:text-gold-800">
          View all
        </a>
      </div>
    </section>
  );
};

export default Bestsellers;
