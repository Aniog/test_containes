import React from 'react';
import { PRODUCTS } from '@/config';
import ProductCard from '@/components/shop/ProductCard';

const Bestsellers = () => {
  const bestsellers = PRODUCTS.slice(0, 5);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 text-center mb-16">
        <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-4 font-bold">Curated for you</p>
        <h2 className="text-3xl md:text-4xl font-serif">The Bestsellers</h2>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
