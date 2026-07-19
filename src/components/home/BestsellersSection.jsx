import React, { useEffect, useRef } from 'react';
import ProductCard from './ProductCard';
import { products } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BestsellersSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 lg:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-velmora-gold text-xs tracking-super-wide uppercase mb-2">Curated for You</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-light text-velmora-base">Bestsellers</h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-4" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestsellersSection;
