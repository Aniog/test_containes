// Velmora Fine Jewelry - Product Card Component
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../lib/utils';

const ProductCard = ({ product, showRating = false }) => {
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
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-[#F5F2EE] aspect-[4/5] mb-4">
        {/* Main Image */}
        <img
          src={product.image}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Hover Image */}
        {product.hoverImage && (
          <img
            src={product.hoverImage}
            alt={`${product.name} - alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          />
        )}

        {/* Loading Placeholder */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-[#F5F2EE] animate-pulse" />
        )}

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <span
              className="text-[10px] font-medium uppercase tracking-wider px-3 py-1 bg-[#1A1A1A] text-white"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              {product.badge}
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
            className="w-full py-3 bg-[#1A1A1A] text-white text-xs font-medium uppercase tracking-widest hover:bg-[#B8860B] transition-colors disabled:opacity-50"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            {isLoading ? 'Adding...' : 'Quick Add'}
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        {/* Product Name */}
        <h3
          className="text-sm font-semibold uppercase tracking-[0.1em] text-[#1A1A1A] group-hover:text-[#B8860B] transition-colors"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          {product.name}
        </h3>

        {/* Price */}
        <p
          className="text-sm font-medium text-[#1A1A1A]"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          {formatPrice(product.price)}
        </p>

        {/* Rating */}
        {showRating && (
          <div className="flex items-center gap-1 pt-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className={i < Math.floor(product.rating) ? 'text-[#B8860B] fill-[#B8860B]' : 'text-[#E8E2D9]'}
                  strokeWidth={1.5}
                />
              ))}
            </div>
            <span className="text-xs text-[#6B6560]">
              ({product.reviews})
            </span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
