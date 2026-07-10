import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products, bestsellers } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { SectionHeader } from "@/components/ui/Primitives";

export default function Bestsellers() {
  const items = bestsellers
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <section className="bg-ivory py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-wide px-5 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div>
            <p className="editorial-eyebrow mb-3">Most loved</p>
            <h2 className="serif-display text-3xl md:text-5xl lg:text-[56px] leading-[1.05] text-cocoa">
              Our bestsellers
            </h2>
            <p className="mt-3 text-sm md:text-base text-muted max-w-md leading-relaxed">
              The pieces our community reaches for again and again — quietly luxurious, effortlessly wearable.
            </p>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-cocoa hover:text-claret transition-colors duration-300"
          >
            View all
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-14">
          {items.map((p, i) => (
            <ProductCard key={p.id} product={p} eager={i < 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
