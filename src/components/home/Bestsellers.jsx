import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/products/ProductCard';
import { products } from '@/data/products';

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-widest uppercase text-warm-800">
            Bestsellers
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-6" />
          <p className="font-sans text-sm text-warm-400 mt-4 max-w-md mx-auto">
            Our most-loved pieces, chosen by women who appreciate timeless elegance
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-warm-500 hover:text-gold transition-colors duration-300 border-b border-warm-200 hover:border-gold pb-1"
          >
            View All Jewelry
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
