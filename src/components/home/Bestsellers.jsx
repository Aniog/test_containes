import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';

const Bestsellers = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light">
            Bestsellers
          </h2>
          <p className="mt-3 text-sm text-muted font-sans">
            Our most-loved pieces, chosen by you
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="inline-block px-8 py-3 border border-gold text-gold font-sans text-sm uppercase tracking-wider no-underline hover:bg-gold hover:text-white transition-all duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
