import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../lib/utils';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-charcoal/20 overflow-hidden border border-charcoal/30">
        <div
          className={`absolute inset-0 bg-gradient-to-b from-transparent to-obsidian/40 transition-opacity duration-500 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Placeholder image area */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="block text-muted/30 text-xs tracking-widest uppercase">
              {product.images[0]?.query ? 'Stock Image' : 'No Image'}
            </span>
          </div>
        </div>

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-gold/90 text-obsidian text-[10px] font-bold tracking-[0.15em] uppercase backdrop-blur-sm">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-400 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={handleQuickAdd}
            className="w-full py-3 bg-ivory/95 text-obsidian text-xs font-medium tracking-[0.15em] uppercase hover:bg-ivory transition-colors flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            <ShoppingBag size={14} strokeWidth={1.5} />
            ADD TO CART
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 space-y-1.5">
        <h3 className="font-heading text-sm tracking-[0.12em] text-ivory group-hover:text-gold transition-colors duration-300">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={11}
                className={i < Math.round(product.rating) ? 'fill-gold text-gold' : 'text-charcoal/60'}
                strokeWidth={0}
              />
            ))}
          </div>
          <span className="text-[11px] text-muted/50">({product.reviewCount})</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-sans text-sm text-gold">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="font-sans text-xs text-muted/40 line-through">{formatPrice(product.originalPrice)}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
