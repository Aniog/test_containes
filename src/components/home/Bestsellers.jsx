import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { products } from "@/data/products.js";
import ProductCard from "@/components/product/ProductCard.jsx";
import { useReveal } from "@/lib/useReveal.js";

export default function Bestsellers() {
  const ref = useReveal();
  const items = products.filter((p) => p.bestseller).slice(0, 5);
  return (
    <section
      id="bestsellers"
      className="bg-cream-100 py-20 sm:py-28"
      aria-labelledby="bestsellers-title"
    >
      <div className="mx-auto max-w-editorial px-4 sm:px-6 lg:px-10">
        <div ref={ref} className="reveal flex flex-col items-center text-center mb-12 sm:mb-16">
          <p className="eyebrow text-muted-500">Most Loved</p>
          <h2
            id="bestsellers-title"
            className="mt-3 font-serif text-4xl sm:text-5xl text-ink-800"
          >
            Our Bestsellers
          </h2>
          <p className="mt-4 max-w-md text-sm text-muted-500 leading-relaxed">
            Quiet pieces, made to outlast the season. Worn alone or stacked, layered, given, kept.
          </p>
        </div>

        {/* Desktop: 5-up grid; mobile: horizontal scroll */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-5">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="md:hidden -mx-4 sm:-mx-6 px-4 sm:px-6">
          <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2">
            {items.map((p) => (
              <div
                key={p.id}
                className="snap-start flex-none w-[68vw] sm:w-[55vw] max-w-[320px]"
              >
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 sm:mt-14 text-center">
          <Link
            to="/shop"
            className="link-underline inline-flex items-center gap-2 group"
          >
            View All Jewelry
            <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
