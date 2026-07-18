import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductGrid from '@/components/product/ProductGrid';
import { getBestsellers } from '@/data/products';

const Bestsellers = () => {
  const containerRef = useRef(null);
  const bestsellers = getBestsellers(5);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="caption-label mb-3">Most Loved</p>
          <h2 id="section-title" className="section-title">
            Bestsellers
          </h2>
        </div>

        <ProductGrid products={bestsellers} />

        <div className="mt-12 md:mt-16 text-center">
          <Link to="/shop" className="btn-secondary">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
