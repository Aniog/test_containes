import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/product/ProductCard";
import { PRODUCTS } from "@/data/products";

export default function Bestsellers() {
  const bestsellers = PRODUCTS.slice(0, 5);

  return (
    <section className="bg-sand-50">
      <div className="mx-auto max-w-content px-6 md:px-10 lg:px-16 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <span className="label-cap text-champagne-600">Bestsellers</span>
            <h2
              id="bestsellers-title"
              className="mt-4 font-serif text-4xl md:text-5xl font-light text-ink-950"
            >
              The pieces they keep.
            </h2>
            <p
              id="bestsellers-subtitle"
              className="mt-4 text-textmute max-w-md"
            >
              Five quiet signatures — the ones our community reaches for, gifts, and returns to.
            </p>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 label-cap text-ink-950 hover:text-champagne-600 editorial-transition"
          >
            View All
            <ArrowRight size={14} strokeWidth={1.4} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-12 md:gap-x-6 md:gap-y-16">
          {bestsellers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
