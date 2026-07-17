import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getBestsellers } from '../../data/products';
import ProductCard from '../ui/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

export default function Bestsellers() {
  const containerRef = useRef(null);
  const bestsellers = getBestsellers();

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section className="py-16 md:py-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl text-espresso mb-3">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-4" />
          <p className="text-taupe text-sm font-sans">
            Our most loved pieces, chosen by you.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {bestsellers.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-xs tracking-ultra-wide uppercase font-sans font-medium text-espresso hover:text-gold transition-colors group"
          >
            View All Jewelry
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
