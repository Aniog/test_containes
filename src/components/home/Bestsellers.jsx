import React from 'react';
import { products } from '../../data/products';
import ProductCard from '../product/ProductCard';

export default function Bestsellers() {
  const bestsellerProducts = products.slice(0, 5);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif-display text-4xl md:text-5xl mb-4">Best Sellers</h2>
        <p className="text-[#6B6560] text-lg">Our most loved pieces, treasured by customers worldwide</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {bestsellerProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="/shop"
          className="btn-premium-outline inline-block"
        >
          View All Collections
        </a>
      </div>
    </section>
  );
}
