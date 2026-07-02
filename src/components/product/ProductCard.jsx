import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      <Link to={`/product/${product.slug}`} className="block">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-linen overflow-hidden mb-3">
          <img
            data-strk-img-id={`product-card-${product.id}-a1b2c3`}
            data-strk-img={`[product-name-${product.id}] gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Quick add overlay */}
          <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product);
              }}
              className="w-full bg-white/95 backdrop-blur-sm text-ink py-2.5 text-xs uppercase tracking-button font-medium hover:bg-gold hover:text-charcoal transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Info */}
        <h3 id={`product-name-${product.id}`} className="font-serif text-xs md:text-sm uppercase tracking-product text-ink">
          {product.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-ink">${product.price}</p>
      </Link>
    </div>
  );
}
