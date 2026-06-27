import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

export default function ProductCard({ product, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addItem } = useCart();
  
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };
  
  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsAdding(true);
    // Default to first variant
    const variant = product.variants?.[0]?.value || 'gold';
    addItem(product, variant, 1);
    
    setTimeout(() => setIsAdding(false), 1000);
  };
  
  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-[var(--color-ivory)] rounded overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]?.src}
          alt={product.images[0]?.alt || product.name}
          className={cn(
            'absolute inset-0 w-full h-full object-cover',
            'transition-opacity duration-500',
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          )}
        />
        
        {/* Secondary Image (hover) */}
        {product.images[1] && (
          <img
            src={product.images[1].src}
            alt={product.images[1].alt || product.name}
            className={cn(
              'absolute inset-0 w-full h-full object-cover',
              'transition-opacity duration-500',
              isHovered ? 'opacity-100' : 'opacity-0'
            )}
          />
        )}
        
        {/* Bestseller Badge */}
        {product.isBestseller && (
          <span className="absolute top-3 left-3 px-2 py-1 bg-[var(--color-gold)] text-[var(--color-rich-black)] text-[10px] font-medium uppercase tracking-wider rounded-sm">
            Bestseller
          </span>
        )}
        
        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          disabled={isAdding}
          className={cn(
            'absolute bottom-4 left-4 right-4',
            'flex items-center justify-center gap-2',
            'py-3 bg-[var(--color-charcoal)] text-[var(--color-cream)]',
            'text-xs uppercase tracking-[0.1em] font-medium',
            'transition-all duration-300',
            'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0',
            isAdding && 'bg-[var(--color-gold)] text-[var(--color-rich-black)]'
          )}
        >
          <ShoppingBag className="w-4 h-4" />
          {isAdding ? 'Added!' : 'Quick Add'}
        </button>
      </div>
      
      {/* Product Info */}
      <div className="space-y-2">
        {/* Product Name */}
        <h3 
          className="text-sm font-medium text-[var(--color-charcoal)] group-hover:text-[var(--color-gold)] transition-colors"
          style={{ fontFamily: 'var(--font-serif)', letterSpacing: '0.08em' }}
        >
          {product.name}
        </h3>
        
        {/* Price */}
        <p className="text-sm text-[var(--color-warm-gray)]">
          {formatPrice(product.price)}
        </p>
        
        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  'w-3 h-3',
                  i < Math.floor(product.rating) 
                    ? 'fill-[var(--color-gold)] text-[var(--color-gold)]' 
                    : 'text-[var(--color-sand)]'
                )}
              />
            ))}
          </div>
          <span className="text-xs text-[var(--color-taupe)]">
            ({product.reviews})
          </span>
        </div>
      </div>
    </Link>
  );
}
