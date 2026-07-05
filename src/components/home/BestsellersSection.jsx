import React from 'react';
import { products } from '../../data/products';
import ProductCard from '../ProductCard';

const bestsellers = products.filter((p) => p.bestseller);

export default function BestsellersSection() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28">
      <div className="text-center mb-12">
        <h2
          className="text-3xl md:text-4xl text-[#2C2622] mb-3"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Bestsellers
        </h2>
        <div className="w-12 h-px bg-[#C9A84C] mx-auto" />
        <p className="text-sm text-[#8A7F74] mt-4 max-w-md mx-auto">
          Our most-loved pieces, chosen by women who know what they want.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-8">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
