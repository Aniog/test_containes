import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '@/components/product/ProductCard';
import { PRODUCTS } from '@/data/products';

export default function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-cream py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-champagne mb-3">
              Loved by you
            </p>
            <h2 className="font-serif font-light text-3xl md:text-5xl text-ink">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden md:inline-block text-xs uppercase tracking-[0.3em] text-ink-soft hover:text-ink link-underline"
          >
            View all
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-12 md:gap-x-6">
          {PRODUCTS.map((product, idx) => (
            <ProductCard key={product.id} product={product} priority={idx < 3} />
          ))}
        </div>

        <div className="mt-12 md:hidden text-center">
          <Link
            to="/shop"
            className="inline-block border border-ink text-ink hover:bg-ink hover:text-cream px-7 py-3 text-xs tracking-[0.3em] uppercase transition-all"
          >
            View all
          </Link>
        </div>
      </div>
    </section>
  );
}
