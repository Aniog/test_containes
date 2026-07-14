import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { PRODUCTS } from "@/data/products";

export default function Bestsellers() {
  return (
    <section className="bg-bone text-ink py-20 md:py-28 lg:py-32">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-16">
          <div>
            <p className="eyebrow">Most Loved</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl lg:text-6xl font-light text-ink leading-[1.05]">
              Bestsellers
            </h2>
            <p className="mt-3 font-sans text-sm md:text-base text-muted-light max-w-md">
              The pieces our community reaches for most — the foundations
              of a considered jewelry box.
            </p>
          </div>
          <Link
            to="/shop"
            className="editorial-link self-start md:self-end"
          >
            Shop All
            <ArrowRight className="inline-block ml-2 w-3.5 h-3.5" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6 lg:gap-8">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.id} product={p} priority={i < 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
