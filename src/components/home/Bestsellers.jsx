import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from './ProductCard';

const bestsellers = products.filter(p => p.tags.includes('bestseller'));

export default function Bestsellers() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <h2 className="font-serif text-2xl md:text-3xl text-center text-espresso tracking-wide">
          Bestsellers
        </h2>
        <div className="w-12 h-px bg-gold mx-auto mt-4" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 mt-12">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
