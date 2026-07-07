import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { StrkImage } from '@/components/Image';
import { StarRating } from '@/components/StarRating';
import { formatPrice, cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';

export function ProductCard({ product, className }) {
  const { addToCart } = useCart();
  const [hovered, setHovered] = useState(false);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.variants[0].value);
  };

  return (
    <Link
      to={`/products/${product.id}`}
      className={cn('group block', className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-4">
        <StrkImage
          id={`product-${product.id}-primary`}
          query={`[product-${product.id}-name] ${product.imgQuery}`}
          ratio="3x4"
          width={600}
          alt={product.name}
          className="transition-transform duration-700 ease-out-expo group-hover:scale-105"
        />
        <div
          className={cn(
            'absolute inset-0 transition-opacity duration-500',
            hovered ? 'opacity-100' : 'opacity-0'
          )}
        >
          <StrkImage
            id={`product-${product.id}-hover`}
            query={`[product-${product.id}-name] ${product.imgQuery} detail`}
            ratio="3x4"
            width={600}
            alt={`${product.name} alternate view`}
            className="transition-transform duration-700 ease-out-expo group-hover:scale-105"
          />
        </div>
        <button
          type="button"
          onClick={handleQuickAdd}
          className={cn(
            'absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 py-3 text-sm font-medium uppercase tracking-widest',
            'bg-card/95 text-foreground backdrop-blur-sm border border-border',
            'transform transition-all duration-500 ease-out-expo',
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          )}
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag className="w-4 h-4" />
          Quick Add
        </button>
      </div>
      <div className="text-center">
        <h3
          id={`product-${product.id}-name`}
          className="font-serif text-sm md:text-base uppercase tracking-[0.16em] text-foreground mb-1"
        >
          {product.name}
        </h3>
        <StarRating rating={product.rating} count={product.reviewCount} className="justify-center mb-2" />
        <p className="text-sm font-medium text-foreground">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
