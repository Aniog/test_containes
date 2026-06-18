import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "@/components/products/ProductCard";
import { PRODUCTS } from "@/data/products";

export default function Bestsellers() {
  const items = PRODUCTS.filter((p) => p.bestseller).slice(0, 5);

  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="max-w-page mx-auto px-5 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="text-[11px] uppercase tracking-wider2 text-gold mb-3">The Edit</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">Bestsellers</h2>
          </div>
          <Link
            to="/shop"
            className="text-[11px] uppercase tracking-editorial border-b border-ink pb-1 self-start md:self-end hover:text-gold hover:border-gold transition"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-12 md:gap-x-6 lg:gap-x-8">
          {items.map((product, idx) => (
            <ProductCard key={product.id} product={product} priority={idx < 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
