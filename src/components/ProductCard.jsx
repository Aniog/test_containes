import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice, generateStars, cn } from '@/lib/utils';

export default function ProductCard({ product, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.colors[0]);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-cream-dark rounded-sm overflow-hidden mb-4">
        {/* Primary image */}
        <div
          className={cn(
            'absolute inset-0 transition-opacity duration-500',
            isHovered ? 'opacity-0' : 'opacity-100'
          )}
        >
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry product photography`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hover image */}
        <div
          className={cn(
            'absolute inset-0 transition-opacity duration-500',
            isHovered ? 'opacity-100' : 'opacity-0'
          )}
        >
          <img
            data-strk-img-id={`${product.imgId}-hover`}
            data-strk-img={`[${product.descId}] [${product.titleId}] jewelry detail close up`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} detail`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-charcoal text-cream text-[10px] tracking-widest-2xl uppercase font-medium px-3 py-1.5">
            {product.badge}
          </span>
        )}

        {/* Quick add button */}
        <button
          onClick={handleAddToCart}
          className={cn(
            'absolute bottom-3 left-3 right-3 bg-charcoal/90 backdrop-blur-sm text-cream py-3 flex items-center justify-center gap-2 text-xs tracking-widest uppercase font-medium transition-all duration-300',
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          )}
        >
          <ShoppingBag className="w-4 h-4" />
          Add to Bag
        </button>
      </div>

      {/* Product info */}
      <div className="space-y-1.5">
        <p id={product.titleId} className="font-serif text-base md:text-lg tracking-wider uppercase text-charcoal group-hover:text-gold transition-colors">
          {product.name}
        </p>
        <p id={product.descId} className="text-xs text-charcoal-light line-clamp-1">
          {product.description}
        </p>
        <div className="flex items-center gap-2">
          <span className="font-medium text-charcoal">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-sm text-charcoal-light/50 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
        {/* Rating */}
        <div className="flex items-center gap-1">
          {generateStars(product.rating).map((filled, i) => (
            <Star
              key={i}
              className={cn(
                'w-3 h-3',
                filled ? 'fill-gold text-gold' : 'text-gold/30'
              )}
            />
          ))}
          <span className="text-xs text-charcoal-light ml-1">({product.reviewCount})</span>
        </div>
      </div>
    </Link>
  );
}
