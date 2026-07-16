import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, selectedVariant);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-cream-200 mb-4">
        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 bg-charcoal-900 text-cream-100 text-[10px] font-sans tracking-ultra-wide uppercase px-3 py-1">
            {product.badge}
          </span>
        )}

        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={cn(
            'w-full h-full object-cover transition-all duration-700',
            isHovered ? 'scale-105 opacity-0' : 'scale-100 opacity-100'
          )}
          loading="lazy"
        />

        {/* Secondary Image */}
        <img
          src={product.secondImage}
          alt={`${product.name} - alternate view`}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-all duration-700',
            isHovered ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
          )}
          loading="lazy"
        />

        {/* Quick Add Button */}
        <button
          onClick={handleAddToCart}
          className={cn(
            'absolute bottom-4 left-4 right-4 bg-charcoal-900 text-white py-3 font-sans text-xs tracking-ultra-wide uppercase flex items-center justify-center gap-2 transition-all duration-300',
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
        >
          <ShoppingBag className="w-4 h-4" />
          Add to Cart
        </button>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                'w-3 h-3',
                i < Math.floor(product.rating)
                  ? 'fill-gold-400 text-gold-400'
                  : 'fill-cream-300 text-cream-300'
              )}
            />
          ))}
          <span className="text-xs text-charcoal-500 ml-1">({product.reviews})</span>
        </div>

        {/* Name */}
        <h3 className="font-serif text-base md:text-lg tracking-ultra-wide uppercase text-charcoal-900 group-hover:text-gold-600 transition-colors">
          {product.name}
        </h3>

        {/* Price */}
        <p className="font-sans text-sm font-medium text-charcoal-700">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
}
