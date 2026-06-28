import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '@/components/products/ProductCard';
import { products } from '@/data/products';

const HomeBestsellers = () => {
  const sectionRef = useRef(null);
  const bestsellers = products.slice(0, 5);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, sectionRef.current);
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-sm font-sans uppercase tracking-[0.3em] text-brand-gold font-bold">The Essentials</h2>
            <h3 id="bestsellers-title" className="text-4xl md:text-5xl font-serif">Bestsellers</h3>
          </div>
          <a href="/shop" className="text-xs font-sans uppercase tracking-widest border-b border-brand-charcoal pb-1 hover:opacity-70 transition-opacity">
            View All Jewelry
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBestsellers;