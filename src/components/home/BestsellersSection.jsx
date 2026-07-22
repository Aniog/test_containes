import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/data/products";

export default function BestsellersSection() {
  const bestsellers = PRODUCTS.filter((p) => p.bestseller).slice(0, 5);

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-luxe text-gold">
            Most Loved
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium text-cream md:text-5xl">
            The <span className="italic text-gold-soft">Bestsellers</span>
          </h2>
        </div>
        <Link
          to="/shop"
          className="group hidden items-center gap-2 text-[11px] font-semibold uppercase tracking-luxe text-cream/80 transition-colors hover:text-gold md:inline-flex"
        >
          View all
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:mt-14 md:grid-cols-3 md:gap-x-6 lg:grid-cols-5">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-10 text-center md:hidden">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 border border-gold px-8 py-3.5 text-[11px] font-semibold uppercase tracking-luxe text-gold transition-colors duration-300 hover:bg-gold hover:text-noir"
        >
          View all pieces
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
