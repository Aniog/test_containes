import React, { forwardRef } from 'react';

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

const ProductImage = forwardRef(
  (
    {
      product,
      index = 0,
      tone = product.tone[0],
      ratio = '3x4',
      width = '600',
      alt,
      className = '',
      imgId,
      titleId,
    },
    ref
  ) => {
    const key = product.images[tone]?.[index] || product.images[product.tone[0]]?.[index];
    const uniqueId = imgId || `${product.id}-img-${tone}-${index}`;
    const query = titleId ? `[${titleId}]` : `[${product.id}-title]`;

    return (
      <img
        ref={ref}
        data-strk-img-id={uniqueId}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src={PLACEHOLDER}
        alt={alt || product.name}
        className={`w-full h-full object-cover ${className}`}
        loading="lazy"
      />
    );
  }
);

ProductImage.displayName = 'ProductImage';

export default ProductImage;
