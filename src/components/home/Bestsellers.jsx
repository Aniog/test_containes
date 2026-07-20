import React, { useEffect, useRef } from 'react';
import ProductCard from '../ProductCard';
import { products } from '@/lib/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Bestsellers = () => {
  const containerRef = useRef(null);
  const featuredProducts = products.filter(p => p.featured);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-serif">Curated Gems</h2>
            <p className="text-gray-400 text-xs uppercase tracking-[0.2em]">Our most loved pieces</p>
          </div>
          <a href="/shop" className="text-xs uppercase tracking-widest border-b border-black pb-1 hover:opacity-70 transition-opacity">View All</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
EOF > /workspace/my-app/src/components/home/Bestsellers.jsx
import React, { useEffect, useRef } from 'react';
import ProductCard from '../ProductCard';
import { products } from '@/lib/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Bestsellers = () => {
  const containerRef = useRef(null);
  const featuredProducts = products.filter(p => p.featured);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-serif">Curated Gems</h2>
            <p className="text-gray-400 text-xs uppercase tracking-[0.2em]">Our most loved pieces</p>
          </div>
          <a href="/shop" className="text-xs uppercase tracking-widest border-b border-black pb-1 hover:opacity-70 transition-opacity">View All</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
