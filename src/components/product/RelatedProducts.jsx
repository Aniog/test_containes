import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';

export default function RelatedProducts({ currentProductId }) {
  const containerRef = useRef(null);
  const related = products.filter((p) => p.id !== currentProductId).slice(0, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [currentProductId]);

  return (
    <div ref={containerRef} className="mt-16 md:mt-24 pt-12 border-t border-brand-sand">
      <h3 className="font-serif text-2xl md:text-3xl text-brand-charcoal tracking-wide text-center mb-10">
        You May Also Like
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {related.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} className="group">
            <div className="aspect-[3/4] overflow-hidden bg-brand-warm img-placeholder">
              <img
                data-strk-img-id={`related-${product.imgId}`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h4
              id={product.titleId}
              className="font-serif text-xs md:text-sm tracking-super-wide uppercase text-brand-charcoal mt-3 group-hover:text-brand-gold transition-colors"
            >
              {product.name}
            </h4>
            <span
              id={product.descId}
              className="hidden"
            >
              {product.description}
            </span>
            <p className="font-sans text-sm text-brand-charcoal mt-1">
              ${product.price}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
