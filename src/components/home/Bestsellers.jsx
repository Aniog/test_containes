import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
    <section ref={containerRef} className="py-20 lg:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-[10px] tracking-ultra-wide uppercase font-sans text-gold mb-3">
              Most Loved
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-obsidian" style={{ fontWeight: 300 }}>
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-xs tracking-widest uppercase font-sans text-ink-muted hover:text-gold transition-colors border-b border-linen hover:border-gold pb-0.5 self-start sm:self-auto"
          >
            View All
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
