import { useEffect, useRef } from 'react';
import { products } from '@/data/products';
import ProductCard from '../ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const bestsellers = products.filter((p) => p.badge);

export default function Bestsellers() {
  const ref = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-cream">
      <div className="mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-600 font-medium mb-3">
            Curated Favorites
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">Bestsellers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 md:gap-x-6 gap-y-10">
          {bestsellers.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} queryContext="[bestsellers-title]" />
          ))}
        </div>

        <div id="bestsellers-title" className="sr-only">
          Velmora Fine Jewelry Bestsellers
        </div>
      </div>
    </section>
  );
}
