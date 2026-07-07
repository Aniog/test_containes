import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product, compact = false }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className={`relative ${compact ? 'aspect-[3/4]' : 'aspect-[3/4]'} bg-surface-cream overflow-hidden rounded-sm mb-3`}>
        <div
          className="absolute inset-0"
          data-strk-img-id={`product-card-${product.id}`}
          data-strk-img={`[${product.id}-name] ${product.imageSearch}`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
        >
          <div className="w-full h-full bg-gradient-to-br from-brand-gold-pale/30 to-surface-cream" />
        </div>

        {/* Hover overlay */}
        <div className={`absolute inset-0 bg-surface-primary/20 transition-opacity duration-400 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product);
            }}
            className="absolute bottom-3 left-3 right-3 bg-surface-primary text-text-primary text-[11px] uppercase tracking-[0.12em] py-2.5 rounded-sm flex items-center justify-center gap-1.5 hover:bg-surface-tertiary transition-colors duration-300 font-sans"
          >
            <ShoppingBag size={12} />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="px-0.5">
        <h3 className={`font-sans ${compact ? 'text-[11px]' : 'text-xs'} uppercase tracking-[0.12em] text-text-dark font-medium mb-1 group-hover:text-brand-gold-dark transition-colors duration-300`}>
          {product.name}
        </h3>
        <p className={`font-sans ${compact ? 'text-xs' : 'text-sm'} text-brand-gold-dark font-medium`}>
          ${product.price}
        </p>
        {!compact && (
          <div className="flex items-center gap-1 mt-1">
            <Star size={10} className="text-brand-gold fill-brand-gold" />
            <span className="font-sans text-[11px] text-text-dark-secondary">
              {product.rating} ({product.reviewCount})
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
