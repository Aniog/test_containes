import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import Button from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ProductCard = ({ product }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden rounded-sm bg-background aspect-[3/4]">
        <img
          src={product.images[0]}
          alt={product.name}
          onLoad={() => setImageLoaded(true)}
          className={cn(
            'h-full w-full object-cover transition-all duration-700 ease-premium',
            imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          )}
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate`}
            className={cn(
              'absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-premium',
              hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            )}
          />
        )}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-surface/90 backdrop-blur-sm text-[10px] tracking-widest uppercase text-ink px-3 py-1 rounded-full">
            {product.badge}
          </span>
        )}
        <div
          className={cn(
            'absolute inset-x-0 bottom-0 flex justify-center pb-4 transition-all duration-500 ease-premium',
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          )}
        >
          <Button size="sm" className="shadow-lg" onClick={(e) => { e.preventDefault(); }}>
            <ShoppingBag className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="font-serif text-base md:text-lg text-ink uppercase tracking-widest">{product.name}</h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-accent">
            <Star className="h-3.5 w-3.5 fill-current" />
            <span className="text-xs font-medium">{product.rating}</span>
          </div>
          <span className="text-xs text-ink-secondary">({product.reviewCount})</span>
        </div>
        <p className="text-sm font-medium text-ink">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
