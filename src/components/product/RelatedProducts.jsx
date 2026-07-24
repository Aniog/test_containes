import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';

const RelatedProducts = ({ currentProductId }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [currentProductId]);

  const relatedProducts = products
    .filter(p => p.id !== currentProductId)
    .slice(0, 4);

  return (
    <section ref={containerRef} className="py-24 bg-background border-t border-border/40">
      <div className="container mx-auto px-4">
        <h2 id="related-title" className="text-2xl md:text-3xl font-serif text-center mb-12">You May Also Like</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {relatedProducts.map((product) => (
            <Link 
              key={product.id} 
              to={`/product/${product.id}`}
              className="group block"
            >
              <div className="aspect-[3/4] bg-secondary relative overflow-hidden mb-4 rounded-[2px] transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-sm">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-strk-img-id={`related-${product.id}`}
                  data-strk-img={`[related-item-title-${product.id}] [related-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                />
              </div>
              <h3 
                id={`related-item-title-${product.id}`}
                className="font-serif tracking-wide text-sm md:text-base group-hover:text-primary transition-colors truncate"
              >
                {product.name}
              </h3>
              <p className="text-muted-foreground text-sm mt-1">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
