import { Link } from 'react-router-dom';
import { Plus, Check } from 'lucide-react';
import { useState } from 'react';
import { formatPrice, cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import StarRating from './StarRating';

function CardImage({ product, hover }) {
  const primary = product.images[0];
  const secondary = product.images[1] || product.images[0];
  return (
    <div className="relative w-full aspect-[4/5] overflow-hidden bg-champagne/30">
      {/* primary image (always mounted for strk-img) */}
      <img
        alt={product.title}
        className={cn(
          'absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-editorial',
          hover ? 'opacity-0' : 'opacity-100'
        )}
        data-strk-img-id={`${primary.imgId}`}
        data-strk-img={`[${primary.descId}] [${primary.titleId}]`}
        data-strk-img-ratio="4x5"
        data-strk-img-width="800"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      />
      {/* secondary image (cross-fades in on hover) */}
      <img
        alt=""
        aria-hidden="true"
        className={cn(
          'absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-editorial',
          hover ? 'opacity-100' : 'opacity-0'
        )}
        data-strk-img-id={`${secondary.imgId}-hover`}
        data-strk-img={`[${secondary.descId}] [${secondary.titleId}]`}
        data-strk-img-ratio="4x5"
        data-strk-img-width="800"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      />
    </div>
  );
}

export default function ProductCard({ product, eager = false }) {
  const { addToCart } = useCart();
  const [hover, setHover] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product.id, { tone: product.tone, quantity: 1 });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1400);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative">
        <CardImage product={product} hover={hover} />

        {/* Quick add overlay - desktop only */}
        <button
          type="button"
          onClick={handleAdd}
          aria-label={`Quick add ${product.title} to bag`}
          className={cn(
            'hidden md:flex absolute left-4 right-4 bottom-4 items-center justify-center gap-2 py-3 bg-ivory/95 backdrop-blur-sm text-ink font-sans text-[11px] uppercase tracking-widest-2 transition-all duration-500 ease-editorial',
            hover ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none',
            added && 'bg-ink text-ivory'
          )}
        >
          {added ? (
            <>
              <Check className="w-3.5 h-3.5" strokeWidth={1.6} /> Added
            </>
          ) : (
            <>
              <Plus className="w-3.5 h-3.5" strokeWidth={1.6} /> Quick add
            </>
          )}
        </button>
      </div>

      <div className="pt-5 pb-1 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="product-name truncate">{product.title}</p>
          <div className="mt-1.5 flex items-center gap-3">
            <StarRating value={product.rating} showCount count={product.reviewCount} />
          </div>
        </div>
        <p className="font-sans text-sm text-ink-soft whitespace-nowrap mt-0.5">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
