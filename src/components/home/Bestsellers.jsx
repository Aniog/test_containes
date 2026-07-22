import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';
import { useScrollReveal } from '../../lib/hooks';
import ProductCard from '../products/ProductCard';
import { products } from '../../data/products';

export default function Bestsellers() {
  const { ref, isVisible } = useScrollReveal();
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const bestsellers = products.filter((p) => p.bestseller);

  return (
    <section ref={(node) => { ref.current = node; containerRef.current = node; }} className="py-section-mobile md:py-section bg-ivory">
      <div className="max-w-[1280px] mx-auto px-6">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-caption uppercase tracking-[0.2em] text-gold font-sans font-medium mb-3">
            Curated for You
          </p>
          <h2 className="font-serif text-h2 text-charcoal">Bestsellers</h2>
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {bestsellers.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
