import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../product/ProductCard';
import { products } from '../../data/products';

export default function Bestsellers() {
  const bestsellers = products.filter((p) => p.isBestseller).slice(0, 5);

  return (
    <section className="section-padding bg-white">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl font-light mb-3"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-[#C9A96E] mx-auto" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="btn-primary-outline inline-block"
          >
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  );
}
