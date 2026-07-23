import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from './ProductCard';

export default function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal">
              Bestsellers
            </h2>
            <p className="mt-2 text-sm text-muted-fg">Our most-loved pieces, chosen by you.</p>
          </div>
          <Link
            to="/shop"
            className="hidden md:inline-block text-xs tracking-[0.1em] uppercase font-sans font-medium text-charcoal hover:text-gold transition-colors border-b border-charcoal hover:border-gold pb-0.5"
          >
            View All
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            to="/shop"
            className="text-xs tracking-[0.1em] uppercase font-sans font-medium text-charcoal hover:text-gold transition-colors border-b border-charcoal hover:border-gold pb-0.5"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
