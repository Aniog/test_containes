import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      return ImageHelper.loadImages(strkImgConfig, cardRef.current);
    }
  }, []);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0].id);
  };

  return (
    <Link
      ref={cardRef}
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-brand-100 rounded-sm overflow-hidden">
        {/* Primary image */}
        <img
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          data-strk-img-id={`${product.imgId}-card-1`}
          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry product`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
        />
        {/* Hover image */}
        <img
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          data-strk-img-id={`${product.imgId}-card-2`}
          data-strk-img={`[${product.descId}] [${product.titleId}] jewelry detail close-up`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
        />

        {/* Quick add button */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-3 left-3 right-3 py-2.5 bg-charcoal-950/90 text-brand-100 text-[10px] tracking-ultra-wide uppercase font-semibold flex items-center justify-center gap-2 rounded-sm backdrop-blur-sm transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          } hover:bg-charcoal-950`}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Add to Cart
        </button>

        {/* Sale badge */}
        {product.originalPrice && (
          <span className="absolute top-3 left-3 px-2 py-1 bg-gold-600 text-white text-[10px] tracking-wide uppercase font-semibold rounded-sm">
            Sale
          </span>
        )}
      </div>

      {/* Product info */}
      <div className="mt-3 sm:mt-4">
        <h3 className="text-[11px] sm:text-xs tracking-ultra-wide uppercase text-charcoal-900 font-semibold group-hover:text-gold-700 transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-charcoal-500 mt-1">{product.shortDescription}</p>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-gold-400 text-gold-400' : 'text-brand-300'}`}
              />
            ))}
          </div>
          <span className="text-[10px] text-charcoal-500">({product.reviewCount})</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm font-semibold text-charcoal-950">${product.price}</span>
          {product.originalPrice && (
            <span className="text-xs text-charcoal-400 line-through">${product.originalPrice}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
