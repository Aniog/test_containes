import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '@/components/shared/ProductCard';
import { products } from '@/data/products';

const RelatedProducts = ({ currentProductId }) => {
  const containerRef = useRef(null);
  const related = products.filter(p => p.id !== currentProductId).slice(0, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [currentProductId]);

  return (
    <section ref={containerRef} className="py-16 border-t border-warm">
      <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-10 text-center">
        You May Also Like
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {related.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
