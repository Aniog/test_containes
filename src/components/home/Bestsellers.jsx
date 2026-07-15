import React, { useEffect, useRef } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Bestsellers = () => {
  const containerRef = useRef(null);
  const bestsellers = products.filter(p => p.isBestseller).slice(0, 5);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 id="bestseller-title" className="text-3xl md:text-4xl font-serif mb-4 italic">The Bestsellers</h2>
          <p id="bestseller-subtitle" className="text-xs uppercase tracking-widestest text-muted-foreground font-medium">Loved by our growing community</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
