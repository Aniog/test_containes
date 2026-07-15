import { useState } from 'react';
import { ShoppingBag, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { StarRating } from './ui/StarRating';

export function ProductCard({ product, featured = false }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const tone = product.toneOptions?.includes('gold') ? 'gold' : product.toneOptions[0];

  const handleQuickAdd = (e) => {
    e.preventDefault();
    addItem(product, 1, tone);
  };

  return (
    <article
      className="group relative flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link
        to={`/products/${product.id}`}
        className="relative aspect-[4/5] overflow-hidden bg-velmora-stone"
      >
        <img
          data-strk-img-id={`product-card-${product.id}`}
          data-strk-img={`[product-card-name-${product.id}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width={featured ? '700' : '600'}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Second image placeholder effect */}
        <div
          className="absolute inset-0 bg-velmora-ink/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden="true"
        />
        <button
          type="button"
          className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-velmora-ink opacity-0 shadow-sm transition-all duration-300 hover:text-velmora-gold group-hover:opacity-100"
          aria-label="Add to wishlist"
        >
          <Heart size={16} />
        </button>
        <button
          type="button"
          onClick={handleQuickAdd}
          className="absolute bottom-0 left-0 right-0 translate-y-full bg-velmora-ink py-3 text-center text-xs font-medium uppercase tracking-widest text-white transition-transform duration-300 group-hover:translate-y-0"
        >
          <span className="inline-flex items-center gap-2">
            <ShoppingBag size={14} /> Quick Add
          </span>
        </button>
      </Link>

      <div className="mt-4 text-center">
        <h3
          id={`product-card-name-${product.id}`}
          className="font-serif text-base uppercase tracking-[0.15em] text-velmora-ink"
        >
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </h3>
        <div className="mt-1 flex items-center justify-center gap-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-xs text-velmora-taupe">({product.reviewCount})</span>
        </div>
        <p className="mt-2 text-sm font-medium text-velmora-ink">${product.price}</p>
      </div>
    </article>
  );
}
