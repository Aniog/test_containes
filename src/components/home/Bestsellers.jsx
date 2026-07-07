import React from 'react';
import { seedProducts } from '@/data/products';
import { ProductCard } from '../ProductCard';

const Bestsellers = () => {
  const bestsellers = seedProducts.filter(p => p.bestseller).slice(0, 5); // Take up to 5 bestsellers

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Most Loved</h2>
          <p className="text-muted-foreground uppercase tracking-widest text-xs">Curated favorites just for you</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
