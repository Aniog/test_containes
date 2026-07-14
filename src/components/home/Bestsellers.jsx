import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

export default function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold mb-3">
            Curated Selection
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal">
            Bestsellers
          </h2>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12 md:mt-16">
          <Link to="/shop">
            <Button variant="secondary" size="lg" className="rounded">
              View All Jewelry
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
