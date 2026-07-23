import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { Rating } from '@/components/ui/Rating';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

export function ProductCard({ product, showRating = true }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-cream rounded-sm overflow-hidden mb-4">
        {/* Primary image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-all duration-500',
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100',
            !imageLoaded && 'opacity-0'
          )}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Secondary image on hover */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt=""
            aria-hidden="true"
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-all duration-500',
              isHovered ? 'opacity-100' : 'opacity-0'
            )}
          />
        )}
        
        {/* Loading placeholder */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-cream animate-pulse" />
        )}

        {/* Quick add button */}
        <div
          className={cn(
            'absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-espresso/60 to-transparent',
            'transform transition-all duration-300',
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          )}
        >
          <button
            onClick={handleQuickAdd}
            className="w-full py-3 bg-ivory text-charcoal text-sm font-medium tracking-wide rounded-sm hover:bg-gold hover:text-espresso transition-colors flex items-center justify-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Quick Add
          </button>
        </div>

        {/* Bestseller badge */}
        {product.bestseller && (
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 bg-gold text-espresso text-xs font-medium tracking-wide rounded-sm">
              Bestseller
            </span>
          </div>
        )}
      </div>

      {/* Product info */}
      <div className="text-center">
        {showRating && (
          <div className="flex justify-center mb-2">
            <Rating value={product.rating} size="sm" showCount count={product.reviewCount} />
          </div>
        )}
        
        <h3 className="product-name text-sm mb-1 group-hover:text-gold transition-colors">
          {product.name}
        </h3>
        
        <p className="font-serif text-charcoal">${product.price}</p>
      </div>
    </Link>
  );
}
