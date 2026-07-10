import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../../data/products';
import ProductCard from '../product/ProductCard';

export default function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="bg-velmora-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4">
          <div>
            <p className="font-manrope text-xs tracking-widest-xl uppercase text-velmora-gold mb-3">
              Curated for You
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-obsidian">
              Our Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="font-manrope text-xs tracking-widest-md uppercase text-velmora-text-mid hover:text-velmora-gold transition-colors duration-300 border-b border-velmora-text-mid/30 hover:border-velmora-gold pb-0.5 self-start md:self-auto"
          >
            View All
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
