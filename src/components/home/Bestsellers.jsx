import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { bestsellers } from '@/data/products';
import ProductCard from './ProductCard';

export default function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="max-w-[1440px] mx-auto px-6 lg:px-16 py-16 lg:py-24">
      <div className="text-center mb-12 lg:mb-16">
        <p className="text-xs tracking-widest uppercase text-taupe font-sans mb-4">Loved by Our Community</p>
        <h2 className="serif-heading text-3xl md:text-4xl lg:text-5xl font-light">Bestsellers</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6">
        {bestsellers.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/shop" className="btn-outline">
          View All Products
        </Link>
      </div>
    </section>
  );
}
