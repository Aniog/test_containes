import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Rating from './Rating';
import { cn } from '@/lib/utils';

export default function ProductCard({ product, className }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'Gold', 1);
  };

  return (
    <div
      className={cn('group', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-[4/5] bg-warm-cream overflow-hidden mb-4">
          {/* Primary Image */}
          <img
            src={product.images?.[0]}
            alt={product.name}
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
              isHovered && product.hoverImage ? 'opacity-0' : 'opacity-100',
              !imageLoaded && 'opacity-0'
            )}
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Hover Image */}
          {product.images?.[1] && (
            <img
              src={product.images[1]}
              alt={`${product.name} - alternate view`}
              className={cn(
                'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
                isHovered ? 'opacity-100' : 'opacity-0'
              )}
            />
          )}

          {/* Quick Add Button */}
          <button
            onClick={handleQuickAdd}
            className={cn(
              'absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm',
              'flex items-center justify-center gap-2 py-3',
              'font-sans text-xs uppercase tracking-extra-wide text-charcoal',
              'transition-all duration-300',
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag size={14} />
            <span>Quick Add</span>
          </button>

          {/* Sale Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 bg-gold text-white px-3 py-1 text-xs uppercase tracking-wider">
              {product.badge}
            </span>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <h3 className="product-name text-sm">{product.name}</h3>
          <div className="flex items-center gap-3">
            <span className="font-serif text-charcoal">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-taupe line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          {product.rating && (
            <Rating rating={product.rating} count={product.reviewCount} size={12} />
          )}
        </div>
      </Link>
    </div>
  );
}
