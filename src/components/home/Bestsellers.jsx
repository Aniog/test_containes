import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from './ProductCard';
import { products } from '@/data/products';

const Bestsellers = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-3">Bestsellers</h2>
        <p className="font-sans text-sm text-warm-gray">Our most-loved pieces, chosen by you</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/shop"
          className="inline-block px-8 py-3 border border-charcoal text-charcoal text-xs font-sans font-medium tracking-product uppercase no-underline hover:bg-charcoal hover:text-white transition-colors"
        >
          View All
        </Link>
      </div>
    </section>
  );
};

export default Bestsellers;
