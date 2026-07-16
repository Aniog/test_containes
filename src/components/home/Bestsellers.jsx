import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';

export default function Bestsellers() {
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-mega-wide uppercase text-gold-500 mb-3">
            Curated for You
          </p>
          <h2 className="section-title">Bestsellers</h2>
          <div className="divider mt-4" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 font-sans text-sm tracking-ultra-wide uppercase text-charcoal-700 hover:text-gold-500 transition-colors group"
          >
            View All Jewelry
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
