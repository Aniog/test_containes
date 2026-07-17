import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultVariant = product.variants?.[0] || 'Gold';
    addItem(product, defaultVariant);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-sand/50 overflow-hidden rounded-sm mb-4">
        {/* Placeholder */}
        <div className={`absolute inset-0 bg-warm-200 flex items-center justify-center transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}>
          <span className="text-warm-500 text-xs tracking-wider">GOLD</span>
        </div>
        {/* Second image on hover */}
        <div className={`absolute inset-0 bg-warm-400 flex items-center justify-center transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-cream text-xs tracking-wider">ALT</span>
        </div>

        {/* Quick add */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-3 left-1/2 -translate-x-1/2 z-10 btn-primary text-[10px] py-2 px-4 tracking-widest whitespace-nowrap transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
        >
          <ShoppingBag className="w-3 h-3 mr-1.5" />
          Add to Cart
        </button>
      </div>

      {/* Info */}
      <h3 className="text-xs tracking-widest2 uppercase font-medium text-deep-900 mb-1">
        {product.name}
      </h3>
      <div className="flex items-center gap-1.5 mb-1">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-2.5 h-2.5 ${i < Math.floor(product.rating) ? 'fill-accent text-accent' : 'text-sand'}`}
            />
          ))}
        </div>
        <span className="text-[11px] text-deep-400">({product.reviewCount})</span>
      </div>
      <p className="text-sm font-medium text-deep-900 tabular-nums">
        ${product.price}
      </p>
    </Link>
  );
}
