import { useRef, useEffect } from 'react';
import ProductCard from './ProductCard';
import { products } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28">
      <div className="text-center mb-14">
        <p className="font-sans text-[11px] tracking-widest3 uppercase text-warm-600 mb-4">
          Editor&apos;s Picks
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-charcoal-900">
          Bestsellers
        </h2>
        <div className="w-12 h-px bg-warm-400 mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
        {products.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </section>
  );
}
