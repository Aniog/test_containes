import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, showQuickAdd = true }) {
  const [hovered, setHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addItem, setCartOpen } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
    setCartOpen(true);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-cream-dark overflow-hidden mb-4">
        {/* Primary image */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            hovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div
            data-strk-img-id={`product-${product.id}-img-1`}
            data-strk-img={`[product-${product.id}-name]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            className="w-full h-full bg-taupe-light/20"
            style={{
              backgroundImage: imageLoaded ? undefined : undefined,
            }}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[10px] text-muted tracking-wider uppercase">Loading</span>
            </div>
          )}
        </div>

        {/* Secondary image on hover */}
        {product.images[1] && (
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              data-strk-img-id={`product-${product.id}-img-2`}
              data-strk-img={`[product-${product.id}-name]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              className="w-full h-full bg-taupe-light/20"
            />
          </div>
        )}

        {/* Quick add button */}
        {showQuickAdd && (
          <div
            className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
              hovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
            }`}
          >
            <button
              onClick={handleQuickAdd}
              className="w-full py-3 bg-charcoal/90 backdrop-blur-sm text-white text-[10px] tracking-[0.2em] uppercase hover:bg-charcoal transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Add to Bag
            </button>
          </div>
        )}

        {/* Bestseller badge */}
        {product.bestseller && (
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 bg-gold text-white text-[10px] tracking-[0.15em] uppercase">
              Bestseller
            </span>
          </div>
        )}
      </div>

      {/* Product info */}
      <div className="space-y-2">
        <h3
          id={`product-${product.id}-name`}
          className="font-serif text-sm md:text-base tracking-[0.08em] uppercase text-charcoal group-hover:text-gold transition-colors"
        >
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-gold text-gold" />
            <span className="text-xs text-charcoal">{product.rating}</span>
          </div>
          <span className="text-xs text-muted">({product.reviewCount})</span>
        </div>
        <p className="text-sm font-medium text-charcoal">${product.price}</p>
      </div>
    </Link>
  );
}
