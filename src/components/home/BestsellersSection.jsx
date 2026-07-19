import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';

export default function BestsellersSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = products.filter(p => p.tags?.includes('bestseller'));

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="font-inter text-xs uppercase tracking-[0.2em] text-gold mb-3">Curated for You</p>
          <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light text-espresso tracking-wide">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 md:mt-14">
          <Link
            to="/shop"
            className="inline-block border border-espresso text-espresso font-inter text-xs uppercase tracking-[0.15em] px-10 py-3.5 hover:bg-espresso hover:text-ivory transition-all duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
