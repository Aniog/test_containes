import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-velmora-pearl mb-4">
        {/* Primary image */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            data-strk-bg-id={product.images[0].id}
            data-strk-bg={product.imgQuery}
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="600"
            role="img"
            aria-label={product.images[0].alt}
          />
        </div>

        {/* Hover image */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            data-strk-bg-id={product.images[1]?.id || `${product.images[0].id}-alt`}
            data-strk-bg={`${product.imgQuery} detail close-up`}
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="600"
            role="img"
            aria-label={product.images[1]?.alt || product.images[0].alt}
          />
        </div>

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-velmora-black text-white text-[10px] tracking-wider uppercase px-3 py-1.5 font-sans">
            {product.badge}
          </span>
        )}

        {/* Quick add button */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm text-velmora-black text-xs tracking-wider uppercase py-3 flex items-center justify-center gap-2 transition-all duration-300 hover:bg-velmora-gold hover:text-white ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <ShoppingBag size={14} />
          Add to Cart
        </button>
      </div>

      {/* Product info */}
      <div>
        <h3 className="font-serif text-sm md:text-base uppercase tracking-product text-velmora-black mb-1">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className={i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-sand'}
              />
            ))}
          </div>
          <span className="text-[11px] text-velmora-stone ml-1">({product.reviews})</span>
        </div>

        <p className="font-sans text-sm font-medium text-velmora-black">${product.price}</p>
      </div>
    </Link>
  );
}
