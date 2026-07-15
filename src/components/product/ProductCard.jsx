import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn, formatPrice } from '@/lib/utils';

export default function ProductCard({ product, className }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]?.id || 'gold');
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className={cn('group block', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-cream-200 overflow-hidden rounded">
        {/* Primary image */}
        <img
          data-strk-img-id={product.images[0].id}
          data-strk-img={`[${product.name.toLowerCase().replace(/\s+/g, '-')}] ${product.images[0].query}`}
          data-strk-img-ratio={product.images[0].ratio}
          data-strk-img-width={product.images[0].width}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={cn(
            'absolute inset-0 w-full h-full transition-all duration-700 ease-luxury object-cover',
            isHovered && product.images[1] ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          )}
        />

        {/* Hover image */}
        {product.images[1] && (
          <img
            data-strk-img-id={product.images[1].id}
            data-strk-img={product.images[1].query}
            data-strk-img-ratio={product.images[1].ratio}
            data-strk-img-width={product.images[1].width}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={cn(
              'absolute inset-0 w-full h-full transition-all duration-700 ease-luxury object-cover',
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            )}
          />
        )}

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-charcoal-800 text-cream-100 text-caption uppercase tracking-wider font-sans z-10">
            {product.badge}
          </span>
        )}

        {/* Quick add button */}
        <div
          className={cn(
            'absolute bottom-0 left-0 right-0 p-3 transition-all duration-300',
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          )}
        >
          <button
            onClick={handleAddToCart}
            className="w-full flex items-center justify-center gap-2 py-3 bg-charcoal-800/90 backdrop-blur-sm text-cream-100 text-caption uppercase tracking-wider font-sans hover:bg-charcoal-900 transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="mt-4">
        <h3 className="text-product-name text-body-sm md:text-base text-charcoal-800 group-hover:text-gold-600 transition-colors duration-300">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mt-1.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  'w-3 h-3',
                  i < Math.floor(product.rating) ? 'fill-gold-400 text-gold-400' : 'text-charcoal-300'
                )}
              />
            ))}
          </div>
          <span className="text-body-sm text-charcoal-400">({product.reviewCount})</span>
        </div>
        <p className="text-body font-medium text-charcoal-800 mt-1">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
