import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

export default function ProductCard({ product, index = 0 }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      return ImageHelper.loadImages(strkImgConfig, cardRef.current);
    }
  }, [hovered]);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
  };

  return (
    <div
      ref={cardRef}
      className="group animate-fadeIn"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-cream-dark rounded-lg overflow-hidden mb-4">
          {/* Main image */}
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              hovered ? 'opacity-0' : 'opacity-100'
            }`}
          />

          {/* Hover image */}
          <img
            data-strk-img-id={product.secondImageId}
            data-strk-img={`[${product.descId}] [${product.titleId}] detail closeup`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} - alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 px-2.5 py-1 bg-charcoal text-white text-[10px] font-sans font-semibold tracking-wide-custom uppercase rounded-full">
              {product.badge}
            </span>
          )}

          {/* Sale badge */}
          {product.originalPrice && (
            <span className="absolute top-3 right-3 px-2.5 py-1 bg-red-600 text-white text-[10px] font-sans font-semibold tracking-wide rounded-full">
              Sale
            </span>
          )}

          {/* Quick add button */}
          <button
            onClick={handleQuickAdd}
            className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-5 py-2.5 bg-white text-charcoal text-xs font-sans font-medium tracking-wide uppercase rounded-full shadow-lg transition-all duration-300 ${
              hovered
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-2 pointer-events-none'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>

        {/* Product info */}
        <div className="space-y-1.5">
          <h3
            id={product.titleId}
            className="font-sans text-xs font-medium tracking-product uppercase text-charcoal"
          >
            {product.name}
          </h3>
          <p
            id={product.descId}
            className="font-sans text-xs text-charcoal-muted line-clamp-1"
          >
            {product.description}
          </p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              <Star className="w-3 h-3 fill-gold text-gold" />
              <span className="text-xs font-medium text-charcoal">{product.rating}</span>
            </div>
            <span className="text-xs text-charcoal-muted">({product.reviewCount})</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-serif text-lg text-charcoal">${product.price}</span>
            {product.originalPrice && (
              <span className="font-sans text-sm text-charcoal-muted line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
