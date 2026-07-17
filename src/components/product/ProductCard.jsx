import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addToCart, isLoading } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, product.variants?.[0] || null);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-cream rounded overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Secondary Image (hover) */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} - alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Loading placeholder */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-sand to-cream animate-shimmer" />
        )}

        {/* Bestseller Badge */}
        {product.bestseller && (
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 bg-charcoal text-ivory text-[10px] tracking-wider uppercase">
              Bestseller
            </span>
          </div>
        )}

        {/* Quick Add Button */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={handleQuickAdd}
            disabled={isLoading}
            className="w-full py-3 bg-charcoal/90 backdrop-blur-sm text-ivory text-sm font-body font-medium tracking-wide hover:bg-charcoal transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Bag
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-1.5">
        <h3 className="font-serif uppercase tracking-ultra-wide text-espresso text-sm">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-2">
          <span className="font-body text-charcoal font-medium">
            ${product.price}
          </span>
          
          {/* Rating */}
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 text-gold-500 fill-gold-500" />
            <span className="text-xs text-charcoal/60">{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
