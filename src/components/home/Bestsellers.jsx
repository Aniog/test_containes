import React, { useRef, useEffect } from 'react';
import { getBestsellers } from '../../data/products';
import ProductCard from '../shared/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

const Bestsellers = () => {
  const containerRef = useRef(null);
  const bestsellers = getBestsellers().slice(0, 4); // Show top 4 on homepage for better grid

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 id="section-bestsellers-title" className="text-3xl font-serif text-stone-900 tracking-wide">The Cult Classics</h2>
            <p className="mt-2 text-stone-500 font-light max-w-xl">
              Our most beloved demi-fine pieces, crafted to be layered, lived in, and loved.
            </p>
          </div>
          <Link 
            to="/shop" 
            className="hidden md:inline-block border-b border-stone-900 pb-1 text-sm uppercase tracking-widest text-stone-900 hover:text-stone-500 hover:border-stone-500 transition-colors"
          >
            Shop All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link 
            to="/shop" 
            className="inline-block border border-stone-900 px-8 py-3 text-sm uppercase tracking-widest text-stone-900"
          >
            Shop All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
