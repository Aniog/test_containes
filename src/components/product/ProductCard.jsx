import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block no-underline">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-sand overflow-hidden rounded-sm">
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Hover overlay with second image */}
          <img
            data-strk-img-id={product.imgId2}
            data-strk-img={`[${product.titleId}] gold jewelry close up`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        </div>

        {/* Product info */}
        <div className="mt-4">
          <h3
            id={product.titleId}
            className="text-xs uppercase tracking-product text-charcoal font-sans font-medium"
          >
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-taupe">${product.price}</p>
          <p id={product.descId} className="sr-only">{product.description}</p>
        </div>
      </Link>

      {/* Quick add button */}
      {showQuickAdd && (
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addItem(product);
          }}
          className="absolute bottom-[72px] left-0 right-0 mx-3 py-2.5 bg-cream/95 backdrop-blur-sm border border-stone text-charcoal text-xs uppercase tracking-wider font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 rounded-sm cursor-pointer"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
