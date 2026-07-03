import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, product.variants[0]);
  };

  const animationDelay = index * 100;

  return (
    <article
      className="group"
      style={{ animationDelay: `${animationDelay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        {/* Image Container */}
        <div 
          className="relative overflow-hidden mb-4"
          style={{ aspectRatio: '3/4', backgroundColor: 'var(--velmora-sand)' }}
        >
          {/* Primary Image */}
          <img
            src={product.images[0]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              isHovered && product.images[1] ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Secondary Image (hover) */}
          {product.images[1] && (
            <img
              src={product.images[1]}
              alt={`${product.name} - alternate view`}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            />
          )}

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.isNew && (
              <span 
                className="px-3 py-1 text-[10px] uppercase tracking-wider font-medium"
                style={{ backgroundColor: 'var(--velmora-charcoal)', color: 'white' }}
              >
                New
              </span>
            )}
            {product.comparePrice && (
              <span 
                className="px-3 py-1 text-[10px] uppercase tracking-wider font-medium"
                style={{ backgroundColor: 'var(--velmora-gold)', color: 'white' }}
              >
                Sale
              </span>
            )}
          </div>

          {/* Quick Add Button */}
          <button
            onClick={handleQuickAdd}
            className={`absolute bottom-4 left-4 right-4 py-3 flex items-center justify-center gap-2 text-sm uppercase tracking-wider font-medium transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ 
              backgroundColor: 'var(--velmora-charcoal)',
              color: 'white'
            }}
          >
            <ShoppingBag size={16} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          {/* Product Name */}
          <h3 className="uppercase-tracking text-sm font-medium">
            {product.name}
          </h3>

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium">
              ${product.price}
            </span>
            {product.comparePrice && (
              <span 
                className="text-sm line-through"
                style={{ color: 'var(--velmora-taupe)' }}
              >
                ${product.comparePrice}
              </span>
            )}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  fill={i < Math.floor(product.rating) ? 'var(--velmora-gold)' : 'none'}
                  stroke={i < Math.floor(product.rating) ? 'var(--velmora-gold)' : 'var(--velmora-taupe)'}
                  strokeWidth={1.5}
                />
              ))}
            </div>
            <span className="text-xs" style={{ color: 'var(--velmora-taupe)' }}>
              ({product.reviewCount})
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
