import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '@/components/shop/ProductCard';

export default function RelatedProducts({ products, currentProductId }) {
  const containerRef = useRef(null);
  const related = products.filter(p => p.id !== currentProductId).slice(0, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  if (related.length === 0) return null;

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream-200">
      <div className="container-narrow">
        <div className="text-center mb-10 md:mb-14">
          <div className="hairline mx-auto mb-6" />
          <h2 className="heading-section text-charcoal-800">
            You May Also Like
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
