import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { useImageLoader } from '@/hooks/useImageLoader';

const Bestsellers = () => {
  const containerRef = useImageLoader();

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-gold-600 mb-2">
              Curated Favorites
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-stone-900">Bestsellers</h2>
          </div>
          <Link
            to="/shop"
            className="hidden md:inline-block font-sans text-xs uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors border-b border-current pb-0.5"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-10 text-center md:hidden">
          <Link
            to="/shop"
            className="inline-block px-8 py-3 border border-stone-900 text-stone-900 font-sans text-xs uppercase tracking-widest"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
