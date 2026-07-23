import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import products from '../data/products';

export default function Bestsellers() {
  const bestsellerProducts = products.slice(0, 5);

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 
          className="font-serif text-charcoal mb-3"
          style={{ fontSize: 'clamp(1.875rem, 4vw, 2.5rem)' }}
        >
          Bestsellers
        </h2>
        <div className="hairline w-16 mx-auto my-4" />
        <p className="text-charcoal-500 max-w-md mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem' }}>
          Our most loved pieces, cherished by customers worldwide
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
        {bestsellerProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* View All Link */}
      <div className="text-center mt-12">
        <Link 
          to="/shop" 
          className="btn-secondary inline-block"
          style={{ textDecoration: 'none' }}
        >
          View All Products
        </Link>
      </div>
    </section>
  );
}
