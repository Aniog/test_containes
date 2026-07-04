import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { useStrkImages } from "@/hooks/useStrkImages";

export default function Bestsellers() {
  const ref = useRef(null);
  useStrkImages(ref);

  // Show 5 bestsellers (we have 5 products total — keep the order)
  const items = PRODUCTS.slice(0, 5);

  return (
    <section ref={ref} className="py-20 md:py-28 lg:py-32 bg-cream">
      <div className="container-editorial">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <p className="eyebrow">Most Loved</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink mt-3 tracking-[-0.01em]">
              The Bestsellers
            </h2>
            <p className="text-taupe mt-3 max-w-md text-sm md:text-base">
              The five pieces our community keeps coming back for — and gifting, again and again.
            </p>
          </div>
          <Link
            to="/shop"
            className="hidden md:inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-ink hover:text-gold-deep transition-colors"
          >
            View All
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-14">
          {items.map((p, idx) => (
            <ProductCard key={p.id} product={p} eager={idx < 2} />
          ))}
        </div>

        <div className="mt-12 md:hidden text-center">
          <Link to="/shop" className="btn-outline">
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
