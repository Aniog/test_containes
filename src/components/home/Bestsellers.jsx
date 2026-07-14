import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';

export default function Bestsellers() {
  const bestsellers = products.filter(p => p.isBestseller).slice(0, 5);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section className="py-16 md:py-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-3">Bestsellers</h2>
          <p className="text-muted text-sm">Our most-loved pieces, chosen by you.</p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="inline-block border border-accent text-accent px-8 py-3 text-sm uppercase tracking-wider font-medium hover:bg-accent hover:text-cream transition-colors"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
