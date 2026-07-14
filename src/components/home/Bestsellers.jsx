import React from 'react';
import { getBestsellers } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

export default function Bestsellers() {
  const products = getBestsellers();

  return (
    <section className="py-16 md:py-24 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal mb-4">
            Our Bestsellers
          </h2>
          <p className="text-velmora-taupe max-w-xl mx-auto">
            Discover the pieces our community loves most — from everyday essentials to statement favorites.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
