import React from 'react';
import ProductCard from '../ui/ProductCard';
import { products } from '@/lib/data';

const Bestsellers = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl md:text-4xl font-serif">The Bestsellers</h2>
        <p className="text-xs uppercase tracking-ultra-wide text-muted-foreground">Loved pieces that tell your story</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Bestsellers;
