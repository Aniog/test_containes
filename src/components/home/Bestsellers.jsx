import * as React from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "@/components/product/ProductCard";
import { PRODUCTS } from "@/data/products";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

export function Bestsellers() {
  const headingRef = useReveal();
  return (
    <section className="bg-ivory py-20 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div ref={headingRef} className="reveal text-center">
          <p className="text-[11px] uppercase tracking-eyebrow font-medium text-gold-deep">
            The Edit
          </p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-ink">
            Best Sellers
          </h2>
          <div className="mt-6 mx-auto w-12 h-px bg-gold" />
        </div>

        <div className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-10">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/shop"
            className={cn(
              "inline-block text-xs uppercase tracking-button font-medium text-ink",
              "underline underline-offset-[6px] decoration-1",
              "hover:text-gold-deep transition-colors duration-300"
            )}
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
