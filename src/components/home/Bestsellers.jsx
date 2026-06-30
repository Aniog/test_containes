import React from 'react';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/data/products';

const Bestsellers = () => {
  const bestsellers = products.filter(p => p.badge === 'Bestseller' || p.reviews > 100).slice(0, 5);

  return (
    <section className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-900 mb-4">Bestsellers</h2>
          <div className="w-12 h-px bg-gold-500 mx-auto" />
          <p className="mt-4 text-warm-gray text-sm max-w-md mx-auto">
            Our most-loved pieces, chosen by women who appreciate quiet luxury.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
