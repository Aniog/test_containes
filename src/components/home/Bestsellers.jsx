import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import Reveal from "@/components/Reveal";

export default function Bestsellers() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
              Most Loved
            </p>
            <h2 className="mt-3 font-serif text-4xl font-medium text-ink md:text-5xl">
              The <em className="italic">Bestsellers</em>
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden items-center gap-2 border-b border-gold pb-1 text-[11px] uppercase tracking-[0.22em] text-espresso transition-colors hover:text-gold md:inline-flex"
          >
            View All <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:mt-14 md:grid-cols-3 md:gap-x-6 lg:grid-cols-5">
          {PRODUCTS.map((product, i) => (
            <Reveal key={product.id} delay={i * 80}>
              <ProductCard product={product} imgIdPrefix="bs" />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center md:hidden">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 border-b border-gold pb-1 text-[11px] uppercase tracking-[0.22em] text-espresso"
          >
            View All Jewelry <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
