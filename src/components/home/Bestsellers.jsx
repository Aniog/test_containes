import React, { useEffect, useRef } from 'react';
import ProductCard from '../shop/ProductCard';
import { PRODUCTS } from '@/data/products';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Bestsellers = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" ref={containerRef}>
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl font-serif mb-2 text-stone-900">The Bestsellers</h2>
          <p className="text-stone-500 text-sm italic">Loved by thousands across the globe.</p>
        </div>
        <Link to="/shop" className="text-xs uppercase tracking-widest font-bold border-b border-primary pb-1 hover:opacity-70 transition-opacity text-stone-900">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
        {PRODUCTS.slice(0, 5).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Bestsellers;
