import React, { useEffect, useRef } from 'react';
import ProductCard from './ProductCard';
import { SEED_PRODUCTS } from '../../data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json'; // Make sure this path exists or omit for now

export default function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    try {
      if(strkImgConfig && containerRef.current) {
        requestAnimationFrame(() => {
          ImageHelper.loadImages(strkImgConfig, containerRef.current);
        });
      }
    } catch(e) {
      console.warn("ImageHelper setup skipped for now", e);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl mb-4">Adored by Many</h2>
          <p className="text-muted-foreground uppercase tracking-widest text-sm">Discover our bestsellers</p>
        </div>
        
        {/* We want an odd number (5) looking good on standard grids, or horizontal scroll on mobile */}
        <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 pb-8 md:pb-0 hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
          {SEED_PRODUCTS.slice(4,8).map((product) => (
             <div key={product.id} className="min-w-[70vw] md:min-w-0 snap-start">
               <ProductCard product={product} />
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}