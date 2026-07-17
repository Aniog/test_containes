import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

export default function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 id="bestsellers-title" className="font-serif text-3xl md:text-4xl text-charcoal font-light">
            Bestsellers
          </h2>
          <p id="bestsellers-subtitle" className="mt-3 text-stone text-sm md:text-base font-sans">
            Our most-loved pieces, chosen by you
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-gold text-gold px-10 py-3 text-sm uppercase tracking-widest hover:bg-gold hover:text-white transition-colors"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
