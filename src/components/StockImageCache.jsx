import React, { useEffect, useRef } from 'react';
import { products } from '@/data/products.js';
import { StockImage } from '@/components/ui/StockImage.jsx';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function StockImageCache() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="sr-only" aria-hidden="true">
      {products.map((product) => (
        <StockImage
          key={product.id}
          id={`cart-thumb-${product.id}`}
          query={product.imageQuery}
          ratio="3x4"
          width="200"
          alt={product.name}
          className="h-px w-px overflow-hidden"
          containerRef={containerRef}
        />
      ))}
    </div>
  );
}
