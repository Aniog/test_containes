import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ProductCard } from '@/components/ui/ProductCard';
import { getBestsellers } from '@/data/products';

export function BestsellersSection() {
  const containerRef = useRef(null);
  const bestsellers = getBestsellers(5);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-label text-accent mb-3">Most Loved</p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso font-light">Bestsellers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block px-8 py-3 border border-espresso text-espresso text-xs uppercase tracking-label hover:bg-espresso hover:text-white transition-colors"
          >
            Shop All Bestsellers
          </Link>
        </div>
      </div>
    </section>
  );
}
