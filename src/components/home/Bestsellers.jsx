import React from 'react';
import { products } from '../../data/products';
import ProductCard from '../product/ProductCard';

const Bestsellers = () => {
  const bestsellers = products.filter((p) => p.bestseller);

  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-widest-2xl uppercase text-gold-400 font-sans font-medium mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal-800">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {bestsellers.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
