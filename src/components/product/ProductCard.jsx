import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addToCart, openCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    openCart();
  };

  return (
    <Link 
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-[var(--color-bg-secondary)] overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Secondary Image (hover) */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-[var(--color-gold-primary)] text-white text-[10px] tracking-wider font-sans">
            {product.badge.toUpperCase()}
          </span>
        )}

        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-4 left-4 right-4 py-3 bg-white text-[var(--color-text-primary)] font-sans text-xs tracking-wider flex items-center justify-center gap-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          Add to Bag
        </button>
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-[var(--color-gold-primary)] text-[var(--color-gold-primary)]' : 'text-[var(--color-border-dark)]'}`} 
            />
          ))}
          <span className="text-xs text-[var(--color-text-muted)] ml-1">({product.reviews})</span>
        </div>

        {/* Name */}
        <h3 className="product-name text-[var(--color-text-primary)]">
          {product.name}
        </h3>

        {/* Price */}
        <p className="font-sans text-sm text-[var(--color-text-secondary)]">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}
