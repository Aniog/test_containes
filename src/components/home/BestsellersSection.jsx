import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "@/components/shared/ProductCard";
import { products } from "@/data/products";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

export default function BestsellersSection() {
  const { ref, isVisible } = useScrollReveal();
  const bestsellers = products.slice(0, 5);

  return (
    <section
      ref={(node) => {
        ref.current = node;
      }}
      className="bg-brand-ivory px-6 py-16 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px]">
        <div
          className={cn(
            "mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end",
            isVisible && "animate-fadeUp"
          )}
        >
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-brand-rose-dark">
              Most Loved
            </p>
            <h2 className="mt-3 font-serif text-4xl text-brand-charcoal md:text-5xl">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-[11px] font-medium uppercase tracking-widest text-brand-charcoal underline-offset-4 hover:text-brand-rose-dark hover:underline"
          >
            View All
          </Link>
        </div>

        <div
          className={cn(
            "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-6",
            isVisible && "animate-fadeUp"
          )}
          style={{ animationDelay: isVisible ? "0.15s" : "0s" }}
        >
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
