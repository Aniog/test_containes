import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { StarRating } from '@/components/ui/StarRating';
import { formatPrice } from '@/data/products';
import { useCart } from '@/context/CartContext';

export function ProductCard({ product, sectionId, className }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    const variant = product.variants[0];
    addToCart(product, variant, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div
      className={cn('group', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-cream mb-4">
        <button
          type="button"
          onClick={() => navigate(`/products/${product.slug}`)}
          className="block w-full h-full text-left relative"
          aria-label={`View ${product.name}`}
        >
          <div
            className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
            data-strk-bg-id={`${product.id}-img`}
            data-strk-bg={`[${product.id}-desc] [${product.id}-title]${sectionId ? ` [${sectionId}-title]` : ''}`}
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="600"
            role="img"
            aria-label={product.name}
          />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            data-strk-bg-id={`${product.id}-img-hover`}
            data-strk-bg={`[${product.id}-desc] [${product.id}-title]${sectionId ? ` [${sectionId}-title]` : ''}`}
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="600"
            role="img"
            aria-label={`${product.name} alternate view`}
          />
        </button>

        {/* Quick add button */}
        <div
          className={cn(
            'absolute inset-x-0 bottom-0 p-4 transition-all duration-300',
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          )}
        >
          <button
            type="button"
            onClick={handleQuickAdd}
            className={cn(
              'w-full flex items-center justify-center gap-2 py-3 text-xs uppercase tracking-extra-wide font-medium transition-colors',
              added
                ? 'bg-foreground text-background'
                : 'bg-accent text-accent-foreground hover:bg-accent-hover'
            )}
          >
            <ShoppingBag className="w-4 h-4" />
            {added ? 'Added' : 'Add to Cart'}
          </button>
        </div>
      </div>

      {/* Text */}
      <Link to={`/products/${product.slug}`} className="block text-center">
        <h3
          id={sectionId ? `${sectionId}-${product.id}-title` : `${product.id}-title`}
          className="product-name text-base md:text-lg text-foreground mb-1.5 line-clamp-1"
        >
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-2 mb-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-xs text-muted">({product.reviewCount})</span>
        </div>
        <p id={`${product.id}-desc`} className="hidden">
          {product.description}
        </p>
        <p className="font-sans text-sm text-foreground font-medium">
          {formatPrice(product.price)}
        </p>
      </Link>
    </div>
  );
}
