import React from 'react';
import { products } from '../../data/products';
import ProductCard from '../product/ProductCard';

export default function Bestsellers() {
  const bestsellers = products.slice(0, 5);

  return (
    <section className="section-padding bg-white">
      <div className="container-velmora">
        <div className="text-center mb-16">
          <div className="w-16 h-px bg-gold mx-auto mb-6" />
          <h2 className="heading-serif text-4xl mb-4">Bestsellers</h2>
          <p className="body-text max-w-2xl mx-auto">
            Our most loved pieces, chosen for their timeless elegance and everyday wearability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/shop" className="btn-secondary">
            View All Collections
          </a>
        </div>
      </div>
    </section>
  );
}
