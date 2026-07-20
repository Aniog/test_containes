import React from 'react';
import { products } from '@/api/products';
import ProductCard from '@/components/ui/ProductCard';

const Bestsellers = () => {
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif mb-4">The Essentials</h2>
          <p className="uppercase-spaced text-[10px] text-zinc-500">Most Loved Pieces</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
