import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '@/components/shared/ProductCard';
import { products } from '@/data/products';

const Bestsellers = () => {
  const containerRef = useRef(null);
  const bestsellers = products.filter((p) => p.tags?.includes('bestseller'));

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-ivory" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="font-inter text-xs uppercase tracking-[0.2em] text-gold mb-3">
              Curated for You
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-charcoal tracking-wide">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="font-inter text-xs uppercase tracking-[0.12em] text-stone hover:text-gold transition-colors duration-200 border-b border-stone/30 hover:border-gold pb-0.5 self-start md:self-auto"
          >
            View All
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
