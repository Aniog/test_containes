import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { getBestsellers } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

export default function BestsellersSection() {
  const containerRef = useRef(null);
  const bestsellers = getBestsellers();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">Bestsellers</h2>
          <p className="mt-3 text-sm text-muted max-w-md mx-auto">
            Our most-loved pieces, chosen by you. Timeless designs that elevate every moment.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10 md:mt-14">
          <Link
            to="/shop"
            className="inline-block border border-foreground text-foreground px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-foreground hover:text-background transition-colors duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
