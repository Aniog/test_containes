import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/lib/data';
import ProductCard from '@/components/ui/ProductCard';

const Bestsellers = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-[1600px] mx-auto text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide mb-4">The Bestsellers</h2>
        <p className="font-sans text-sm text-black/50 tracking-widest uppercase">Curated favorites loved by our community</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 max-w-[1600px] mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-20 text-center">
        <a 
          href="/shop"
          className="inline-block border border-black/10 px-12 py-4 uppercase tracking-widest text-xs hover:border-black transition-colors"
        >
          View All Products
        </a>
      </div>
    </section>
  );
};

export default Bestsellers;
