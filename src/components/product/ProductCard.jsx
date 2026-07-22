import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useState } from 'react';
import { Badge, StarRating } from '@/components/ui';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { cn } from '@/lib/utils';

export default function ProductCard({ product, showBadge = true }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addItem, openCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product.id);
    openCart();
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] mb-4 overflow-hidden bg-brand-bg-secondary rounded-sm">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-all duration-500',
            isHovered && product.images[1] ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          )}
        />

        {/* Secondary Image */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-all duration-500',
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            )}
          />
        )}

        {/* Badge */}
        {showBadge && product.bestseller && (
          <div className="absolute top-3 left-3">
            <Badge variant="bestseller">Bestseller</Badge>
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsWishlisted(!isWishlisted);
          }}
          className={cn(
            'absolute top-3 right-3 p-2 bg-brand-bg-primary/80 backdrop-blur-sm rounded-full transition-all duration-300',
            isWishlisted
              ? 'bg-brand-gold text-brand-bg-primary opacity-100'
              : 'opacity-0 group-hover:opacity-100 hover:bg-brand-gold hover:text-brand-bg-primary'
          )}
          aria-label="Add to wishlist"
        >
          <Heart className={cn('w-4 h-4', isWishlisted ? 'fill-current' : '')} />
        </button>

        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          className={cn(
            'absolute bottom-0 left-0 right-0 py-3 bg-brand-gold/95 backdrop-blur-sm text-brand-bg-primary text-xs font-medium uppercase tracking-wider transition-all duration-300',
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          )}
        >
          Quick Add
        </button>
      </div>

      {/* Info */}
      <div>
        <h3 className="text-product-name text-brand-text-primary mb-1 group-hover:text-brand-gold transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-brand-gold font-medium">
            {formatPrice(product.price)}
          </p>
          <StarRating rating={product.rating} size="sm" />
        </div>
      </div>
    </Link>
  );
}
