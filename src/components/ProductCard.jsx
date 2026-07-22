import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import StarRating from './StarRating';

export default function ProductCard({ product, index = 0 }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();
  const nameId = `product-name-${product.id}`;
  const descId = `product-desc-${product.id}`;

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-cream-dark border border-border">
          {/* Primary image */}
          <img
            data-strk-img-id={`card-${product.id}-1`}
            data-strk-img={`[${descId}] [${nameId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out-expo ${
              hovered ? 'opacity-0' : 'opacity-100'
            }`}
          />
          {/* Secondary image on hover */}
          <img
            data-strk-img-id={`card-${product.id}-2`}
            data-strk-img={`[${nameId}] [${descId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out-expo ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 bg-cream/90 backdrop-blur-sm text-dark text-[10px] font-medium tracking-widest uppercase px-2.5 py-1">
              {product.badge}
            </span>
          )}

          {/* Quick add */}
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product, 'gold', 1);
            }}
            className={`absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 bg-cream/95 backdrop-blur-sm text-dark py-2.5 text-xs font-medium tracking-widest uppercase transition-all duration-500 ease-out-expo hover:bg-dark hover:text-cream ${
              hovered ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
            }`}
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>
      </Link>

      {/* Text content */}
      <div className="mt-3 text-center">
        <p className="text-xs text-taupe mb-1 capitalize">{product.category}</p>
        <h3
          id={nameId}
          className="font-serif text-sm md:text-base uppercase tracking-widest text-dark"
        >
          <Link to={`/product/${product.id}`} className="hover:text-gold transition-colors duration-300">
            {product.name}
          </Link>
        </h3>
        <p id={descId} className="sr-only">
          {product.description}
        </p>
        <div className="flex items-center justify-center gap-2 mt-1.5">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[11px] text-taupe">({product.reviews})</span>
        </div>
        <p className="mt-1.5 font-medium text-sm">${product.price}</p>
      </div>
    </div>
  );
}
