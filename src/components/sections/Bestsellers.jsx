import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../../data/products';
import ProductCard from '../product/ProductCard';

export default function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 px-5 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-caption uppercase tracking-[0.2em] text-velmora-gold mb-3">
            Curated for You
          </p>
          <h2 className="font-serif text-heading-1 md:text-display text-velmora-black">
            Bestsellers
          </h2>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
