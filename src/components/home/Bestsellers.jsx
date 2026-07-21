import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Eyebrow } from "@/components/ui/primitives";

export default function Bestsellers() {
  const items = PRODUCTS.filter((p) => p.bestseller);

  return (
    <section className="bg-cream py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>The Edit</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl font-medium text-ink md:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Bestsellers, Worn Daily
            </h2>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
              The five pieces our community reaches for most — restocked, reviewed, and rarely taken off.
            </p>
          </div>
          <Link
            to="/shop"
            className="group hidden items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-ink underline decoration-gold underline-offset-8 transition-colors hover:text-gold md:inline-flex"
          >
            View All
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 5-up grid: 2 cols mobile, 3 md, 5 lg */}
        <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:grid-cols-5">
          {items.map((product, i) => (
            <div key={product.id} className={i >= 3 ? "md:col-span-1" : ""}>
              <ProductCard product={product} index={i} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 border border-ink px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-ink hover:text-cream"
          >
            View All Pieces
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
