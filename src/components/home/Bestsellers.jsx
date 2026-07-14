import React from 'react';
import ProductCard from '@/components/home/ProductCard';
import { products } from '@/data/products';

const Bestsellers = () => {
  const bestsellers = products.filter((p) => p.bestseller).slice(0, 5);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-3 tracking-wide">
            Bestsellers
          </h2>
          <p className="text-[#5c5c5c] max-w-xl mx-auto">
            Our most-loved pieces, chosen by you. Timeless designs that become everyday essentials.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
