import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import products from '@/data/products';

export default function Bestsellers() {
  const containerRef = useRef(null);
  const bestsellers = products.filter((p) => p.bestseller).slice(0, 5);

  return (
    <section className="py-16 lg:py-24 bg-brand-ivory">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-brand-gold text-[11px] tracking-[0.3em] uppercase font-sans mb-3">
            Curated for You
          </p>
          <h2 className="font-serif text-3xl lg:text-5xl text-brand-charcoal font-light">
            Bestsellers
          </h2>
          <div className="w-16 h-px bg-brand-gold/40 mx-auto mt-5" />
        </div>

        {/* Product grid */}
        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8 lg:gap-x-6 lg:gap-y-10">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm text-brand-charcoal tracking-[0.1em] uppercase font-sans border-b border-brand-charcoal/30 pb-1 hover:border-brand-gold hover:text-brand-gold transition-colors"
          >
            View All Products
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
