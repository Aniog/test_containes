import React from "react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { useStrkImages } from "@/hooks/useStrkImages";

export default function Bestsellers() {
  const ref = useStrkImages([]);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream">
      <div className="max-w-content mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16 reveal">
          <p className="text-xs uppercase tracking-[0.24em] text-gold mb-3">Most Loved</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">Bestsellers</h2>
          <p className="mt-4 text-sm text-stone max-w-md mx-auto">
            The pieces our community reaches for, again and again.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10 md:gap-x-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/shop"
            className="inline-block border border-ink text-ink text-xs uppercase tracking-[0.2em] px-10 py-4 hover:bg-ink hover:text-cream transition-colors"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
