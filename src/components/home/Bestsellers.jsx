import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../product/ProductCard';
import AnimatedSection from '../ui/AnimatedSection';
import { products } from '../../data/products';

export default function Bestsellers() {
  const bestsellers = products.filter((p) => p.tags.includes('bestseller'));

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimatedSection className="text-center mb-12 sm:mb-16">
          <p className="text-gold-600 text-xs tracking-mega-wide uppercase font-medium mb-3">
            Most Loved
          </p>
          <h2 className="heading-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-950 font-light">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-5" />
        </AnimatedSection>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {bestsellers.map((product, index) => (
            <AnimatedSection key={product.id} delay={index + 1}>
              <ProductCard product={product} />
            </AnimatedSection>
          ))}
        </div>

        {/* View all link */}
        <AnimatedSection className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-xs tracking-ultra-wide uppercase text-charcoal-700 font-semibold hover:text-gold-700 transition-colors border-b border-charcoal-300 hover:border-gold-400 pb-1"
          >
            View All Jewelry
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
