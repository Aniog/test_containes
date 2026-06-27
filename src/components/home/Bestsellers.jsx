import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/data/products';

export default function Bestsellers() {
  const bestsellers = products.filter((p) => p.bestseller).slice(0, 5);

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4">
            Bestsellers
          </h2>
          <p className="text-muted text-sm md:text-base max-w-lg mx-auto">
            Our most-loved pieces, chosen by women who appreciate quiet luxury and timeless design.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12 md:mt-14">
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-charcoal hover:text-gold transition-colors group"
          >
            View All Jewelry
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
