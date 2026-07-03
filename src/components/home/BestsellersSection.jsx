// Velmora Fine Jewelry - Bestsellers Section Component
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../products/ProductCard';
import { getBestsellers } from '../../data/products';

const BestsellersSection = () => {
  const bestsellers = getBestsellers().slice(0, 5);

  return (
    <section className="section-padding bg-[#FAF8F5]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs uppercase tracking-[0.3em] text-[#B8860B] mb-3"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Customer Favorites
          </p>
          <h2
            className="text-3xl md:text-4xl text-[#1A1A1A] font-normal"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Our Bestsellers
          </h2>
          <div className="divider-gold mt-4" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} showRating />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/collections/all"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-[#1A1A1A] hover:text-[#B8860B] transition-colors group"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            View All Products
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestsellersSection;
