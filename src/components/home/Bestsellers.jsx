import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

export default function Bestsellers() {
  const featured = products.filter((p) => p.bestseller).slice(0, 5);

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
      <div className="reveal flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bronze">
            Most Loved
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium leading-[1.08] text-espresso md:text-5xl">
            The Bestsellers
          </h2>
          <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-cocoa md:text-base">
            The pieces our community reaches for daily — restocked, re-loved,
            and reviewed over a thousand times.
          </p>
        </div>
        <Link
          to="/shop"
          className="group inline-flex items-center gap-2 border-b border-espresso pb-1 text-[11px] font-medium uppercase tracking-[0.25em] text-espresso transition-colors duration-300 hover:border-bronze hover:text-bronze"
        >
          View All
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
            strokeWidth={1.5}
          />
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:grid-cols-5">
        {featured.map((product, index) => (
          <div
            key={product.id}
            className={`reveal ${
              index === 4 ? "col-span-2 md:col-span-1" : ""
            }`}
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            <ProductCard product={product} eager={index < 2} />
          </div>
        ))}
      </div>
    </section>
  );
}
