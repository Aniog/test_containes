import React from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

export default function Bestsellers() {
  const bestsellerProducts = products.filter(p => p.bestseller).slice(0, 5);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">Bestsellers</h2>
        <div className="hairline w-24 mx-auto mb-4" />
        <p className="text-gray-600 uppercase tracking-wider text-sm">Our most loved pieces</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
        {bestsellerProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center">
        <Link to="/shop" className="btn-secondary">
          View All Products
        </Link>
      </div>
    </section>
  );
}