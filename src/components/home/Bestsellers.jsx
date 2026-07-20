import React from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "./ProductCard";
import { products } from "../../data/products";

export function Bestsellers() {
  // Show first 5 products as bestsellers
  const bestsellers = products.slice(0, 5);

  return (
    <section className="section max-w-7xl mx-auto px-6">
      <div className="flex items-end justify-between mb-8">
        <div>
          <span className="text-xs tracking-[0.15em] text-[var(--color-text-muted)] uppercase">Curated for You</span>
          <h2 className="heading-serif text-4xl mt-1">Bestsellers</h2>
        </div>
        <Link to="/shop" className="hidden md:block text-sm tracking-widest uppercase hover:text-[var(--color-accent)] transition-colors">
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center mt-8 md:hidden">
        <Link to="/shop" className="text-sm tracking-widest uppercase hover:text-[var(--color-accent)]">
          View All →
        </Link>
      </div>
    </section>
  );
}
