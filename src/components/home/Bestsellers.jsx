import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/product/ProductCard";
import { PRODUCTS } from "@/lib/products";

export default function Bestsellers() {
  // Show 5 bestsellers
  const items = PRODUCTS.slice(0, 5);

  return (
    <section id="bestsellers" className="bg-ivory">
      <div className="container-shell py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <SectionHeading
            eyebrow="The Edit"
            title="Bestsellers"
            align="left"
          />
          <p className="max-w-sm text-muted text-sm leading-relaxed">
            Quiet pieces, worn closest to the skin — the five our community
            reaches for most.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10 sm:gap-x-6 sm:gap-y-14">
          {items.map((p, idx) => (
            <ProductCard key={p.id} product={p} priority={idx < 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
