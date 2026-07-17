import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';
import { products } from '../../data/products';
import ProductCard from '../product/ProductCard';

export default function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-velmora-ivory">
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-5">
            <span className="w-12 h-hairline bg-velmora-gold" />
            <span className="font-sans text-caption uppercase tracking-[0.2em] text-velmora-gold">
              Curated for You
            </span>
            <span className="w-12 h-hairline bg-velmora-gold" />
          </div>
          <h2 className="heading-section text-velmora-charcoal">
            Bestsellers
          </h2>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-14">
          <Link to="/shop" className="btn-secondary">
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
