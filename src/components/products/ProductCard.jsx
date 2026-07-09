import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice, getStarArray, cn, resolveStrkImgUrl, resolveStrkImgAlt } from '@/lib/utils';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();
  const stars = getStarArray(product.rating);

  const [primarySrc, setPrimarySrc] = useState(null);
  const [hoverSrc, setHoverSrc] = useState(null);
  const [primaryAlt, setPrimaryAlt] = useState(product.name);
  const [hoverAlt, setHoverAlt] = useState(`${product.name} detail`);

  useEffect(() => {
    const pUrl = resolveStrkImgUrl(product.imgIdPrimary);
    const hUrl = resolveStrkImgUrl(product.imgIdHover);
    if (pUrl) setPrimarySrc(pUrl);
    if (hUrl) setHoverSrc(hUrl);
    setPrimaryAlt(resolveStrkImgAlt(product.imgIdPrimary) || product.name);
    setHoverAlt(resolveStrkImgAlt(product.imgIdHover) || `${product.name} detail`);
  }, [product.imgIdPrimary, product.imgIdHover, product.name]);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.colors[0], 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-warm-50 rounded-lg overflow-hidden mb-4">
        {/* Primary image */}
        {primarySrc ? (
          <img
            src={primarySrc}
            alt={primaryAlt}
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-all duration-700',
              hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
            )}
          />
        ) : (
          <div className="absolute inset-0 bg-warm-100 animate-pulse" />
        )}
        {/* Hover image */}
        {hoverSrc && (
          <img
            src={hoverSrc}
            alt={hoverAlt}
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-all duration-700',
              hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            )}
          />
        )}

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-warm-800 text-white text-[10px] font-sans font-medium tracking-wider uppercase py-1 px-3 rounded-sm z-10">
            {product.badge}
          </span>
        )}

        {/* Quick add button */}
        <button
          onClick={handleQuickAdd}
          className={cn(
            'absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm text-warm-800',
            'flex items-center justify-center gap-2 py-3 rounded-sm',
            'font-sans text-xs tracking-wider uppercase',
            'transition-all duration-300 hover:bg-gold hover:text-white',
            'shadow-sm',
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          )}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Add to Cart
        </button>
      </div>

      {/* Product info */}
      <div className="space-y-1.5">
        <h3 className="font-serif text-sm md:text-base tracking-widest uppercase text-warm-800 group-hover:text-gold transition-colors duration-300">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {[...Array(stars.full)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-gold text-gold" />
            ))}
            {[...Array(stars.empty)].map((_, i) => (
              <Star key={`e-${i}`} className="w-3 h-3 text-warm-200" />
            ))}
          </div>
          <span className="text-[10px] text-warm-400 font-sans">({product.reviewCount})</span>
        </div>

        <p className="font-sans text-sm font-medium text-warm-700">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
