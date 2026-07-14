import React from "react";
import ProductCard from "@/components/home/ProductCard";
import { PRODUCT_BY_ID, RELATED_BY_ID } from "@/data/products";

export default function RelatedProducts({ productId }) {
  const ids = RELATED_BY_ID[productId] || [];
  const items = ids
    .map((id) => PRODUCT_BY_ID[id])
    .filter(Boolean);
  if (items.length === 0) return null;

  return (
    <section className="bg-bone text-ink py-20 md:py-24 border-t border-hairline">
      <div className="container-editorial">
        <div className="text-center mb-10 md:mb-12">
          <p className="eyebrow">You may also love</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl font-light leading-[1.05]">
            Pairs beautifully with
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
