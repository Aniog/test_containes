import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const renderStars = (rating) => {
    const stars = [];
    const full = Math.floor(rating);
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          size={12}
          fill={i < full ? '#C8A45C' : 'none'}
          className={i < full ? 'text-velmora-gold' : 'text-velmora-border'}
        />
      );
    }
    return stars;
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-velmora-border/30 overflow-hidden mb-5">
        {/* Primary image */}
        <div className="w-full h-full bg-gradient-to-br from-velmora-charcoal to-velmora-dark flex items-center justify-center">
          <span className="text-velmora-gold/30 font-serif text-6xl tracking-widest select-none">
            V
          </span>
        </div>

        {/* Hover overlay with second image */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-velmora-dark to-velmora-charcoal flex items-center justify-center transition-opacity duration-500 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="text-velmora-gold-light/40 font-serif text-6xl tracking-widest select-none">
            V
          </span>
        </div>

        {/* Quick add button */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={handleAdd}
            className={`w-full py-2.5 text-xs font-sans tracking-[0.1em] uppercase transition-all duration-300 ${
              added
                ? 'bg-velmora-gold text-white'
                : 'bg-velmora-cream/95 text-velmora-dark hover:bg-velmora-gold hover:text-white'
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              <ShoppingBag size={14} />
              {added ? 'Added' : 'Add to Cart'}
            </span>
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-1.5">
        <h3 className="font-serif text-sm md:text-base tracking-[0.12em] uppercase text-velmora-dark group-hover:text-velmora-gold transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-0.5">
          {renderStars(product.rating)}
          <span className="font-sans text-[11px] text-velmora-muted ml-1">
            ({product.reviewCount})
          </span>
        </div>
        <p className="font-sans text-sm font-medium text-velmora-gold">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}