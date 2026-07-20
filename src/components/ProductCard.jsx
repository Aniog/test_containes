import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, index = 0 }) {
  const [hovered, setHovered] = useState(false);
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const variant = product.variants[0];
    addToCart(product, variant, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-cream-200">
        <Link to={`/product/${product.id}`} className="block h-full w-full">
          <img
            data-strk-img-id={`product-${product.id}-1`}
            data-strk-img={`[product-${product.id}-name] ${product.tagline}`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`h-full w-full object-cover transition-transform duration-700 ${
              hovered ? 'scale-105' : 'scale-100'
            }`}
            loading={index < 4 ? 'eager' : 'lazy'}
          />
        </Link>
        {/* quick-add overlay */}
        <div
          className={`absolute inset-x-0 bottom-0 p-3 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
          }`}
        >
          <button
            onClick={handleQuickAdd}
            className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-sm text-xs font-medium tracking-widest uppercase transition-colors ${
              added
                ? 'bg-ink-800 text-white'
                : 'bg-white/90 text-ink-900 hover:bg-white'
            }`}
          >
            {added ? 'Added' : (
              <>
                <Plus className="w-3.5 h-3.5" strokeWidth={2} />
                Quick Add
              </>
            )}
          </button>
        </div>
      </div>

      <Link to={`/product/${product.id}`} className="block mt-3 space-y-1">
        <h3
          id={`product-${product.id}-name`}
          className="font-serif text-sm sm:text-base tracking-widest uppercase text-ink-900"
        >
          {product.name}
        </h3>
        <p className="text-xs text-ink-500 line-clamp-1">{product.tagline}</p>
        <div className="flex items-center gap-2 pt-0.5">
          <span className="text-sm font-medium text-ink-900">${product.price}</span>
          {product.originalPrice && (
            <span className="text-xs text-ink-400 line-through">
              ${product.originalPrice}
            </span>
          )}
          <div className="ml-auto flex items-center gap-1">
            <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
            <span className="text-xs text-ink-500">{product.rating}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
