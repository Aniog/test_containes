import React from 'react';
import { Link } from 'react-router-dom';

const RelatedProductCard = ({ product }) => {
  return (
    <div className="group">
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-[3x4] overflow-hidden bg-brand-warm">
          <img
            data-strk-img-id={`${product.imgId}-related`}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-3">
          <h3 className="font-sans text-xs font-medium uppercase tracking-ultra-wide text-brand-dark">
            {product.name}
          </h3>
          <p className="font-sans text-sm text-brand-dark mt-1">${product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default RelatedProductCard;
