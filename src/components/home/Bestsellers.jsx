import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";

export default function Bestsellers() {
  return (
    <section className="py-16 sm:py-24 bg-cream">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs tracking-mega-wide uppercase text-gold mb-3 font-sans font-medium">
            Curated Selection
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal">
            Our Bestsellers
          </h2>
          <div className="w-16 h-[1px] bg-gold/40 mx-auto mt-5" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="group inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-medium text-charcoal hover:text-gold transition-colors"
          >
            View All Products
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
