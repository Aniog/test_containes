import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '@/components/shop/ProductCard';
import { products } from '@/data/products';

export default function Bestsellers() {
  const containerRef = useRef(null);
  const bestsellers = products.filter(p => p.bestseller).slice(0, 5);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream-100">
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="hairline mx-auto mb-6" />
          <h2 className="heading-section text-charcoal-800" id="bestsellers-title">
            Bestsellers
          </h2>
          <p className="text-sm text-charcoal-400 mt-3 max-w-md mx-auto" id="bestsellers-subtitle">
            Our most loved pieces, chosen by women who appreciate timeless elegance.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
