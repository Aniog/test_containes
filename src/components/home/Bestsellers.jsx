import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/data/catalog";
import ProductCard from "@/components/product/ProductCard";

const Bestsellers = () => {
  const items = PRODUCTS.slice(0, 5);
  return (
    <section className="container-velmora py-20 md:py-28">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="eyebrow">Most Loved</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">
            The <em className="not-italic text-accent">bestsellers</em>
          </h2>
          <p className="mt-3 max-w-md text-sm text-muted-foreground">
            Quietly adored by our community — these are the pieces our customers reach for again and again.
          </p>
        </div>
        <Link
          to="/shop"
          className="text-[11px] font-medium uppercase tracking-widest2 text-ink underline underline-offset-4 hover:text-accent"
        >
          View all <ArrowRight size={12} strokeWidth={1.5} className="inline" />
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-5 md:gap-x-6">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};

export default Bestsellers;
