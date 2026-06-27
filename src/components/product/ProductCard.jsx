import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.variants[0], 1);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] bg-[var(--color-bg-secondary)] overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`
            absolute inset-0 w-full h-full object-cover
            transition-opacity duration-500
            ${isHovered ? 'opacity-0' : 'opacity-100'}
          `}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Secondary Image (on hover) */}
        <img
          src={product.images[1]}
          alt={product.name}
          className={`
            absolute inset-0 w-full h-full object-cover
            transition-opacity duration-500
            ${isHovered ? 'opacity-100' : 'opacity-0'}
          `}
        />

        {/* Quick Add Button */}
        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            className={`
              absolute bottom-4 left-4 right-4
              bg-[var(--color-warm-white)] text-[var(--color-charcoal)]
              font-sans text-sm font-medium py-3
              flex items-center justify-center gap-2
              transition-all duration-300
              ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
            `}
          >
            <ShoppingBag className="w-4 h-4" />
            Quick Add
          </button>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <h3 className="product-name">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-3 h-3 ${i < product.rating ? 'fill-[var(--color-gold)] text-[var(--color-gold)]' : 'text-[var(--color-text-muted)]'}`} 
            />
          ))}
          <span className="font-sans text-xs text-[var(--color-text-muted)] ml-1">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <p className="font-sans text-sm font-medium text-[var(--color-text-primary)]">
          ${product.price}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;