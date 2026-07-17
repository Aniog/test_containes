import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-surface-2 rounded-sm overflow-hidden mb-4">
        {/* Primary image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="block font-serif text-lg text-cream-dim/40 tracking-wider uppercase">Velmora</span>
            <span className="block text-[10px] text-cream-dim/20 mt-1 tracking-wider uppercase">{product.category}</span>
          </div>
        </div>

        {/* Second image on hover (simulated with overlay) */}
        <div
          className={`absolute inset-0 bg-surface-3/50 flex items-center justify-center transition-opacity duration-500 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="text-center">
            <span className="block font-serif text-sm text-gold-light/60 tracking-wider uppercase">View Details</span>
          </div>
        </div>

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-gold text-base text-[10px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-sm">
            {product.badge}
          </span>
        )}

        {/* Quick add button */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 py-2.5 bg-cream text-base text-xs font-medium tracking-wider uppercase transition-all duration-400 rounded-sm ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          } ${added ? 'bg-gold' : 'hover:bg-gold'}`}
        >
          <ShoppingBag size={14} strokeWidth={1.5} />
          {added ? 'Added' : 'Add to Cart'}
        </button>
      </div>

      {/* Product info */}
      <div>
        <h3 className="font-serif text-sm uppercase tracking-ultra-wide text-cream group-hover:text-gold transition-colors duration-300 truncate">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mt-1.5">
          <div className="flex items-center gap-0.5">
            <Star size={12} fill="currentColor" className="text-gold" />
            <span className="text-xs text-cream-muted">{product.rating}</span>
          </div>
          <span className="text-xs text-cream-dim">({product.reviewCount})</span>
        </div>
        <p className="text-sm text-gold mt-1.5">${product.price}</p>
      </div>
    </Link>
  );
}
