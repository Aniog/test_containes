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
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Bestsellers</h2>
          <p className="mt-3 text-muted text-sm md:text-base">Our most-loved pieces, chosen by you</p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} sectionId="bestsellers" />
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-10 md:mt-14">
          <Link
            to="/shop"
            className="inline-block px-8 py-3 border border-gold text-gold text-sm tracking-wider uppercase font-medium hover:bg-gold hover:text-white transition-all duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
