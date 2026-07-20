import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, showQuickAdd = true }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const initials = product.name
    .split(' ')
    .map((w) => w[0])
    .join('');

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-cream overflow-hidden mb-4">
          {/* Primary image */}
          <img
            src={`https://placehold.co/600x800/FAF7F2/C5A059?text=${encodeURIComponent(
              initials
            )}`}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              hovered && product.images > 1 ? 'opacity-0' : 'opacity-100'
            }`}
          />
          {/* Hover image */}
          {product.images > 1 && (
            <img
              src={`https://placehold.co/600x800/1C1917/C5A059?text=${encodeURIComponent(
                initials
              )}`}
              alt={`${product.name} alternate`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                hovered ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 bg-gold text-white text-[10px] font-sans font-semibold tracking-widest uppercase px-2.5 py-1">
              {product.badge}
            </span>
          )}

          {/* Quick add */}
          {showQuickAdd && (
            <button
              onClick={(e) => {
                e.preventDefault();
                addItem(product, 'gold', 1);
              }}
              className={`absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm py-3 flex items-center justify-center gap-2 text-sm font-sans font-medium tracking-wide uppercase transform transition-transform duration-300 ${
                hovered ? 'translate-y-0' : 'translate-y-full'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              Quick Add
            </button>
          )}
        </div>

        <div className="text-center">
          <h3 className="font-serif text-sm tracking-product uppercase text-base mb-1">
            {product.name}
          </h3>
          <div className="flex items-center justify-center gap-1 mb-1.5">
            <Star className="w-3 h-3 fill-gold text-gold" />
            <span className="text-xs text-muted font-sans">
              {product.rating} ({product.reviewCount})
            </span>
          </div>
          <p className="text-sm font-medium font-sans text-base">${product.price}</p>
        </div>
      </Link>
    </div>
  );
}
