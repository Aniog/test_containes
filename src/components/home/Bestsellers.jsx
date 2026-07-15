import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/home/ProductCard';

const Bestsellers = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-12">
        <h2 id="bestsellers-title" className="font-serif text-3xl md:text-4xl text-charcoal font-light">
          Bestsellers
        </h2>
        <p id="bestsellers-subtitle" className="mt-3 text-muted text-sm md:text-base">
          Our most-loved pieces, chosen by you
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/shop"
          className="inline-block px-8 py-3 border border-accent text-accent text-sm font-medium uppercase tracking-widest hover:bg-accent hover:text-white transition-colors"
        >
          View All
        </Link>
      </div>
    </section>
  );
};

export default Bestsellers;
