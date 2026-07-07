import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

export default function Bestsellers({ products }) {
  return (
    <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide mb-4">
          Best Sellers
        </h2>
        <div className="divider-gold w-16 mx-auto mb-6" />
        <p className="font-sans text-lg text-velmora-charcoal-light max-w-2xl mx-auto">
          Our most loved pieces, cherished by customers worldwide
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link 
          to="/shop"
          className="btn-outline inline-block"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
}
