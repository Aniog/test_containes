import React from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

export default function Bestsellers() {
  const bestsellerProducts = products.filter(p => p.bestseller).slice(0, 5);

  return (
    <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">Bestsellers</h2>
        <div className="w-16 h-px bg-[#C9A96E] mx-auto"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {bestsellerProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/shop"
          className="inline-block border border-[#C9A96E] text-[#C9A96E] px-8 py-3 
                     text-sm uppercase tracking-wider hover:bg-[#C9A96E] hover:text-white transition-all"
        >
          View All
        </Link>
      </div>
    </section>
  );
}
