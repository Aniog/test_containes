import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import { StarRating } from '@/components/ui/StarRating';

const SVG_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export function ProductCard({ product, className, showQuickAdd = true }) {
  const { addToCart } = useCart();
  const [hovered, setHovered] = useState(false);
  const primaryTone = product.tone[0];

  return (
    <article
      className={cn('group', className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-velmora-stone/10 mb-4">
        <Link
          to={`/products/${product.id}`}
          className="absolute inset-0 block"
          aria-label={product.name}
        >
          <img
            alt={product.name}
            data-strk-img-id={product.imgId}
            data-strk-img={`[product-search-${product.id}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src={SVG_PLACEHOLDER}
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out',
              hovered ? 'scale-105' : 'scale-100'
            )}
          />
        </Link>
        {showQuickAdd && (
          <button
            type="button"
            aria-label={`Add ${product.name} to cart`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(product, primaryTone, 1);
            }}
            className={cn(
              'absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 py-3 px-4',
              'bg-velmora-cream/95 text-velmora-espresso text-sm font-medium uppercase tracking-wider',
              'opacity-0 translate-y-3',
              'group-hover:opacity-100 group-hover:translate-y-0',
              'focus-visible:opacity-100 focus-visible:translate-y-0',
              'transition-all duration-300 hover:bg-velmora-gold hover:text-white'
            )}
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </button>
        )}
      </div>
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-xs text-velmora-stone">({product.reviewCount})</span>
        </div>
        <Link to={`/products/${product.id}`}>
          <h3 className="font-serif text-sm md:text-base uppercase tracking-[0.18em] text-velmora-espresso">
            {product.name}
          </h3>
        </Link>
        <p className="text-velmora-espresso font-medium">${product.price}</p>
      </div>
    </article>
  );
}
