import React from "react";
import { related } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";

export default function RelatedProducts({ excludeId }) {
  const items = related.filter((r) => r.id !== excludeId).slice(0, 4);
  return (
    <section className="py-20 md:py-28 bg-cream-50 border-t border-hairline">
      <div className="max-w-editorial mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:mb-12">
          <div>
            <p className="eyebrow mb-4">More to love</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.05] max-w-md">
              You may also like
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
