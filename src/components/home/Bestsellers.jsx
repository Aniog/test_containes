import React, { useEffect, useRef } from 'react';
import { products } from '@/lib/data';
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
    <section ref={containerRef} className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 id="bestsellers-title" className="text-4xl md:text-5xl font-light">The Bestsellers</h2>
          <p id="bestsellers-subtitle" className="text-xs uppercase tracking-[0.3em] text-gray-400">Timeless pieces loved by our community</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="/shop" className="text-sm uppercase tracking-widest font-medium text-accent border-b border-accent pb-1 hover:text-[#B59049] transition-colors">
            Discover all collections
          </a>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
