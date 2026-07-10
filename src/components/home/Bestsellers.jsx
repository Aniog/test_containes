import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { useReveal } from "@/lib/useReveal";

export default function Bestsellers() {
  const ref = useReveal();
  const bestsellers = products.slice(0, 5);

  return (
    <section className="bg-cream-50 py-20 md:py-28">
      <div className="max-w-editorial mx-auto px-5 sm:px-8" ref={ref}>
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div>
            <p className="eyebrow mb-4">Most loved</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.05] max-w-xl">
              The pieces our community keeps coming back to.
            </h2>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-[0.7rem] tracking-widest2 uppercase text-ink hover:text-gold transition-colors font-sans font-medium border-b border-ink hover:border-gold pb-1 self-start md:self-auto"
          >
            View all
            <ArrowRight size={14} strokeWidth={1.6} />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-10 sm:gap-x-6">
          {bestsellers.map((p, i) => (
            <div
              key={p.id}
              className="reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
