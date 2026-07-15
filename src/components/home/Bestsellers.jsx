import React from 'react';
import ProductCard from '../product/ProductCard';
import { getFeaturedProducts } from '../../data/products';
import useScrollReveal from '../../hooks/useScrollReveal';

const Bestsellers = () => {
  const featuredProducts = getFeaturedProducts();
  const [headerRef, headerVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-4">
            Our Bestsellers
          </h2>
          <p className="text-[#8B8178] max-w-xl mx-auto">
            Discover our most-loved pieces, carefully curated for those who 
            appreciate timeless elegance and modern design.
          </p>
        </div>

        {/* Products Grid */}
        <div 
          ref={gridRef}
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 transition-all duration-700 delay-200 ${
            gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
