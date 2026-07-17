import React from "react";
import ProductCard from "@/components/home/ProductCard";

export default function ProductGrid({ products, emptyTitle = "No pieces match." }) {
  if (products.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="font-serif text-2xl font-light text-ink mb-2">
          {emptyTitle}
        </p>
        <p className="text-sm text-ink-muted">
          Try removing a filter or two — your piece is out there.
        </p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
