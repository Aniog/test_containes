import React from 'react';

export function ProductImage({ product, ratio = '4x3', width = 600, className = '', imgId, alt }) {
  const titleId = `${product.id}-title`;
  const descId = `${product.id}-desc`;
  return (
    <img
      alt={alt || product.name}
      data-strk-img-id={imgId}
      data-strk-img={`[${descId}] [${titleId}]`}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      className={`w-full h-full object-cover ${className}`}
    />
  );
}
