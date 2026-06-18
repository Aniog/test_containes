import React from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Bestsellers() {
  return (
    <section id="bestsellers" className="bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <SectionHeading
            eyebrow="Loved by many"
            title="Bestsellers"
            align="left"
            className="md:max-w-xl"
          >
            Pieces our community keeps coming back to — quietly worn, often gifted,
            and made to outlast the trends.
          </SectionHeading>
          <Link
            to="/shop"
            className="self-start md:self-end font-sans uppercase tracking-widest2 text-[11px] text-ink hover:text-champagne transition-colors border-b border-ink hover:border-champagne pb-1"
          >
            Shop All →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 md:gap-x-6 gap-y-12">
          {PRODUCTS.map((p, idx) => (
            <ProductCard key={p.id} product={p} eager={idx < 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
