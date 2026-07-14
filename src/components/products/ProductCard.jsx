import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/ui/StarRating';
import { cn } from '@/lib/utils';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden rounded-lg">
        <div className="aspect-[3/4] bg-linen relative overflow-hidden">
          {/* Primary image */}
          <img
            data-strk-img-id={`product-${product.id}-main`}
            data-strk-img={`[${product.id}-search]`}
            data-strk-img-ratio={product.imgRatio || '3x4'}
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 400'%3E%3Crect fill='%23F0EDE6' width='300' height='400'/%3E%3Ctext x='150' y='200' text-anchor='middle' fill='%23C9A84C' font-size='14' font-family='serif'%3EVelmora%3C/text%3E%3C/svg%3E"
            alt={product.name}
            className={cn(
              'w-full h-full object-cover transition-all duration-500 ease-out',
              isHovered && 'scale-105'
            )}
          />

          {/* Hidden search reference element */}
          <span
            id={`${product.id}-search`}
            className="hidden"
          >
            {product.searchQuery}
          </span>

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 bg-charcoal text-ivory text-[10px] uppercase tracking-widest-xl px-3 py-1 font-sans">
              {product.badge}
            </span>
          )}

          {/* Quick add overlay */}
          <div
            className={cn(
              'absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ease-out',
              isHovered
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            )}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product, product.variants?.[0] || 'Gold');
              }}
              className="w-full bg-charcoal/90 backdrop-blur-sm text-ivory py-3 text-xs uppercase tracking-widest-xl font-sans font-medium hover:bg-charcoal transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Quick Add
            </button>
          </div>
        </div>
      </Link>

      {/* Product info */}
      <div className="mt-4 space-y-1.5">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-sans text-xs uppercase tracking-widest-xl text-charcoal hover:text-gold transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <StarRating rating={product.rating} reviews={product.reviews} />
        <p className="font-sans text-sm text-gold font-medium">
          ${product.price}
        </p>
      </div>
    </div>
  );
}
