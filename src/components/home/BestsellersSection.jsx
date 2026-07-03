import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/products/ProductCard';
import { getBestsellers } from '@/data/products';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function BestsellersSection() {
  const [ref, isVisible] = useScrollReveal();
  const bestsellers = getBestsellers();

  return (
    <section className="velmora-section" style={{ backgroundColor: 'var(--velmora-cream)' }}>
      <div className="velmora-container">
        {/* Section Header */}
        <div 
          ref={ref}
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p 
            className="text-xs uppercase tracking-[0.3em] mb-3"
            style={{ color: 'var(--velmora-gold)' }}
          >
            Customer Favorites
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
            Our Bestsellers
          </h2>
          <p className="text-sm md:text-base max-w-xl mx-auto" style={{ color: 'var(--velmora-walnut)' }}>
            The pieces our community reaches for again and again.
          </p>
        </div>

        {/* Products Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-10 stagger-children ${isVisible ? 'visible' : ''}`}>
          {bestsellers.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-wider transition-all hover:gap-3"
            style={{ color: 'var(--velmora-charcoal)' }}
          >
            View All Products
            <ArrowRight size={16} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
