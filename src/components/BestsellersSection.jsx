import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from './ProductCard';

export default function BestsellersSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = products.slice(0, 5);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-velmora-cream">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-velmora-gold mb-2">
              Curated For You
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-charcoal">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden md:block font-sans text-xs font-medium uppercase tracking-[0.15em] text-velmora-charcoal border-b border-velmora-charcoal pb-0.5 hover:text-velmora-gold hover:border-velmora-gold transition-colors"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            to="/shop"
            className="inline-block font-sans text-xs font-medium uppercase tracking-[0.15em] text-velmora-charcoal border-b border-velmora-charcoal pb-0.5"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
