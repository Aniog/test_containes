import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";

export default function Bestsellers() {
  return (
    <section className="bg-ivory">
      <div className="container-page py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
          <div>
            <p className="eyebrow text-taupe mb-3">Most Loved</p>
            <h2
              id="bestsellers-title"
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] text-ink"
            >
              The Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-xs tracking-eyebrow uppercase text-ink hover:text-gold inline-flex items-center gap-2 self-start md:self-auto"
          >
            View All
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-12 md:gap-x-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
