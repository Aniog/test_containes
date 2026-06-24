import React from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

export default function Bestsellers() {
  return (
    <section className="bg-bone">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-3">
              Bestsellers
            </p>
            <h2 className="font-serif font-light text-4xl md:text-5xl text-ink max-w-xl leading-[1.05]">
              The pieces our customers <em className="italic">don't take off</em>.
            </h2>
          </div>
          <Link
            to="/shop"
            className="link-underline text-[11px] tracking-[0.3em] uppercase text-ink shrink-0"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10 md:gap-x-6 md:gap-y-14">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
