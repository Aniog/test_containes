import React, { useEffect, useRef } from 'react';
import { PRODUCTS } from '@/api/products';
import ProductCard from '@/components/shop/ProductCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Bestsellers = () => {
  const containerRef = useRef(null);
  // Use first 5 products for bestsellers
  const bestsellers = PRODUCTS.slice(0, 5);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-24 px-6 md:px-12 bg-white" ref={containerRef}>
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
        <div>
          <h2 id="bestsellers-title" className="text-3xl md:text-4xl font-serif text-velmora-fg mb-4">The Bestsellers</h2>
          <p id="bestsellers-subtitle" className="text-xs uppercase tracking-[0.3em] text-velmora-muted">Curated favorites from our collection</p>
        </div>
        <Link to="/shop" className="mt-6 md:mt-0 text-[10px] uppercase tracking-[0.3em] font-bold border-b border-velmora-fg pb-1 hover:text-velmora-gold hover:border-velmora-gold transition-all duration-300">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-6 md:gap-x-8">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Bestsellers;
