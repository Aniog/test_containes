import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ProductCard = ({ product }) => {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-cream overflow-hidden mb-3">
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Hover overlay with Add to Cart */}
          <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-300" />
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product);
            }}
            className="absolute bottom-3 left-3 right-3 bg-white/95 text-charcoal py-2.5 text-xs tracking-[0.1em] uppercase font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-gold hover:text-white"
          >
            Add to Cart
          </button>
        </div>

        {/* Product info */}
        <h3
          id={product.titleId}
          className="font-serif text-xs md:text-sm tracking-[0.12em] uppercase text-charcoal mb-1"
        >
          {product.name}
        </h3>
        <p className="text-sm text-stone font-light">${product.price}</p>
        <p id={product.descId} className="sr-only">{product.description}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
