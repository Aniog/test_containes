import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/data/products';
import strkImgConfig from '@/strk-img-config.json';
import { ImageHelper } from '@strikingly/sdk';

const BestsellersSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-foreground mb-3">
            Bestsellers
          </h2>
          <p className="font-sans text-sm text-muted-foreground max-w-md mx-auto">
            Our most-loved pieces, chosen by women who know what matters.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-primary hover:text-[#A07D52] transition-colors"
          >
            View All Pieces
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestsellersSection;
