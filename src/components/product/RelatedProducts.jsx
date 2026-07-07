import { useEffect, useRef } from 'react';
import ProductCard from '@/components/home/ProductCard';
import products from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const RelatedProducts = ({ currentId }) => {
  const containerRef = useRef(null);
  const current = products.find((p) => p.id === currentId);
  const related = current
    ? products.filter((p) => current.related?.includes(p.id))
    : products.slice(0, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  if (related.length === 0) return null;

  return (
    <section ref={containerRef} className="py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <h2 className="section-title text-center mb-10">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {related.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;