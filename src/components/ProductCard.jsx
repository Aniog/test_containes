import { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn, formatPrice } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import { StarRating } from './StarRating';

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export function ProductCard({ product, imgId, hoverImgId, titleId, descId, query, hoverQuery, className }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, product.tone[0]);
  };

  return (
    <Link
      to={`/products/${product.id}`}
      className={cn('group block', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-velmora-cream-dark">
        <img
          data-strk-img-id={imgId}
          data-strk-img={query}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <img
          data-strk-img-id={hoverImgId}
          data-strk-img={hoverQuery}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate`}
          className={cn(
            'absolute inset-0 h-full w-full object-cover transition-opacity duration-500',
            isHovered ? 'opacity-100' : 'opacity-0'
          )}
        />
        <button
          type="button"
          onClick={handleQuickAdd}
          className={cn(
            'absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 bg-white/95 py-3 text-xs font-semibold uppercase tracking-widest text-velmora-charcoal backdrop-blur-sm transition-all duration-300 hover:bg-velmora-charcoal hover:text-white',
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          )}
        >
          <ShoppingBag size={14} />
          Quick Add
        </button>
      </div>
      <div className="mt-4 text-center">
        <h3
          id={titleId}
          className="font-serif text-sm uppercase tracking-widest-xl text-velmora-charcoal"
        >
          {product.name}
        </h3>
        <p id={descId} className="sr-only">
          {product.description}
        </p>
        <div className="mt-1.5 flex items-center justify-center gap-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[11px] text-velmora-taupe">({product.reviews})</span>
        </div>
        <p className="mt-2 font-sans text-sm font-medium text-velmora-charcoal">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
