import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const ProductCard = ({ product, className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addItem } = useCart();
  
  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1, product.variants?.[0]?.name);
  };
  
  const hasSecondImage = product.images && product.images.length > 1;
  
  return (
    <Link
      to={`/product/${product.slug}`}
      className={cn(
        'group block',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-[var(--color-surface)] overflow-hidden mb-4">
        {/* First Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
            hasSecondImage && isHovered ? 'opacity-0' : 'opacity-100',
            !imageLoaded && 'opacity-0'
          )}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Loading placeholder */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-[var(--color-surface)] animate-pulse" />
        )}
        
        {/* Second Image (hover) */}
        {hasSecondImage && (
          <img
            src={product.images[1]}
            alt={`${product.name} - alternate view`}
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
              isHovered ? 'opacity-100' : 'opacity-0'
            )}
          />
        )}
        
        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-[var(--color-bg-primary)] text-[10px] font-medium tracking-wider uppercase text-[var(--color-text-primary)]">
            {product.badge}
          </span>
        )}
        
        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          className={cn(
            'absolute bottom-4 left-4 right-4 py-3 bg-[var(--color-gold)] text-[var(--color-bg-primary)] text-xs font-medium tracking-wider uppercase transition-all duration-300',
            'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0',
            'hover:bg-[var(--color-gold-dark)]'
          )}
          aria-label={`Quick add ${product.name} to cart`}
        >
          <span className="flex items-center justify-center gap-2">
            <Plus className="w-3 h-3" strokeWidth={2} />
            Quick Add
          </span>
        </button>
      </div>
      
      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="product-name text-[var(--color-text-primary)] text-center group-hover:text-[var(--color-gold)] transition-colors">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                'w-3 h-3',
                i < Math.floor(product.rating) 
                  ? 'fill-[var(--color-gold)] text-[var(--color-gold)]' 
                  : 'text-[var(--color-text-muted)]'
              )}
              strokeWidth={1.5}
            />
          ))}
          <span className="text-xs text-[var(--color-text-muted)] ml-1">
            ({product.reviewCount})
          </span>
        </div>
        
        {/* Price */}
        <p className="text-center text-[var(--color-text-secondary)] font-sans">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
