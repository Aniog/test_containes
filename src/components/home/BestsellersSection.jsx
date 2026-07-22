import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import ProductCard from '../ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BestsellersSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs tracking-[0.25em] uppercase text-taupe mb-3">Curated for You</p>
          <h2 className="font-serif text-3xl md:text-4xl text-dark">Bestsellers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10 md:mt-14">
          <Link
            to="/shop"
            className="inline-block border border-dark text-dark px-8 py-3 text-xs font-medium tracking-[0.2em] uppercase hover:bg-dark hover:text-cream transition-colors duration-300"
          >
            Shop All
          </Link>
        </div>
      </div>
    </section>
  );
}
