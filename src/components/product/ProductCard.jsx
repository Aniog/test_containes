import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { cn } from '@/lib/utils';

export default function ProductCard({ product, className }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addItem, openCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsAdding(true);
    addItem(product);
    
    setTimeout(() => {
      setIsAdding(false);
      openCart();
    }, 300);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className={cn(
        'group block',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] bg-surface rounded overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={`https://picsum.photos/seed/${product.imageIds[0]}/400/500`}
          alt={product.name}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
            isHovered ? 'opacity-0' : 'opacity-100'
          )}
        />
        
        {/* Secondary Image (hover) */}
        <img
          src={`https://picsum.photos/seed/${product.imageIds[1] || product.imageIds[0]}/400/500`}
          alt={product.name}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
            isHovered ? 'opacity-100' : 'opacity-0'
          )}
        />

        {/* Bestseller Badge */}
        {product.bestseller && (
          <span className="absolute top-3 left-3 bg-primary text-white text-xs px-2 py-1 font-sans tracking-wide">
            BESTSELLER
          </span>
        )}

        {/* Quick Add Button */}
        <button
          onClick={handleAddToCart}
          disabled={isAdding}
          className={cn(
            'absolute bottom-0 left-0 right-0 h-12 bg-white/95 backdrop-blur-sm',
            'flex items-center justify-center gap-2 font-sans text-sm font-medium',
            'transition-all duration-300',
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0',
            isAdding && 'pointer-events-none'
          )}
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
          <span>Quick Add</span>
        </button>
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                'w-3 h-3',
                i < Math.floor(product.rating)
                  ? 'fill-accent text-accent'
                  : 'text-surface-dark'
              )}
              strokeWidth={1.5}
            />
          ))}
          <span className="text-xs text-text-muted ml-1">
            ({product.reviews})
          </span>
        </div>

        {/* Name */}
        <h3 className="font-serif text-sm tracking-wider text-primary">
          {product.name}
        </h3>

        {/* Price */}
        <p className="font-sans text-sm font-medium text-primary">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
