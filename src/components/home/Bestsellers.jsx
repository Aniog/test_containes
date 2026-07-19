import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';

export default function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-charcoal">
            Bestsellers
          </h2>
          <p className="mt-3 text-sm text-muted">Our most-loved pieces, chosen by you</p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-charcoal text-charcoal px-8 py-3 text-sm uppercase tracking-[0.12em] font-medium hover:bg-charcoal hover:text-white transition-colors"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
