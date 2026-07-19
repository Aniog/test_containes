import React from "react";
import { getRelatedProducts } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

export default function RelatedProducts({ currentId }) {
  const related = getRelatedProducts(currentId, 4);
  if (related.length === 0) return null;

  return (
    <section className="py-20 md:py-24 bg-ivory">
      <div className="container-wide">
        <div className="text-center mb-10 md:mb-14">
          <p className="eyebrow mb-3">More to treasure</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">
            You may also love
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-12">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
