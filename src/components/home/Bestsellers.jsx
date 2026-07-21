import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import Reveal from "@/components/ui/Reveal";

export default function Bestsellers() {
  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gold-deep">
              Most Loved
            </p>
            <h2
              id="bestsellers-title"
              className="mt-3 font-serif text-4xl font-medium text-ink md:text-5xl"
            >
              The Bestsellers
            </h2>
            <p
              id="bestsellers-sub"
              className="mt-4 max-w-md text-sm leading-relaxed text-bronze"
            >
              Gold demi-fine jewelry our community reaches for again and again —
              plated in 18k gold and made for every day.
            </p>
          </div>
          <Link
            to="/shop"
            className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-ink underline decoration-gold underline-offset-8 transition-colors hover:text-gold-deep"
          >
            View All
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-5 lg:gap-5">
          {PRODUCTS.map((product, i) => (
            <Reveal
              key={product.id}
              delay={i * 80}
              className={i === 4 ? "col-span-2 lg:col-span-1" : ""}
            >
              <ProductCard product={product} idPrefix="bestseller" index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
