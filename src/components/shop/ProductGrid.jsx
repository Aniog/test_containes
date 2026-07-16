import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '@/components/shared/ProductCard';

const ProductGrid = ({ products }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [products]);

  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="font-serif text-xl text-charcoal mb-2">No products found</p>
        <p className="text-sm text-taupe">Try adjusting your filters.</p>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
