import React, { useEffect, useRef } from 'react';
import { products } from '@/api/products';
import ProductCard from '@/components/ui/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Bestsellers = () => {
  const containerRef = useRef(null);
  const bestsellers = products.filter(p => p.isBestseller).slice(0, 5);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-[#FCFBF7]">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col items-center mb-16 space-y-4">
          <h2 id="bestsellers-title" className="font-serif text-3xl md:text-5xl text-center text-slate-800">
            Our Bestsellers
          </h2>
          <div className="w-12 h-[1px] bg-[#C5A059]" />
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#A8A29A]">Treasured by many</p>
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

export default Bestsellers;
