import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/data/products';
import { cn } from '@/lib/cn';

/**
 * Premium product card with hover image swap and quick-add.
 * Image is loaded via the stock image system tags.
 */
export default function ProductCard({ product, index = 0, eager = false }) {
  const { addItem } = useCart();
  const titleId = `pc-${product.id}-title`;
  const descId = `pc-${product.id}-desc`;

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group relative block fade-up"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-ivory">
        {/* primary image */}
        <img
          alt={product.name}
          data-strk-img-id={`pc-${product.id}-primary-9k2x`}
          data-strk-img={`[${descId}] [${titleId}] luxury gold jewelry editorial photography warm light`}
          data-strk-img-ratio="4x3"
          data-strk-img-width={eager ? '900' : '700'}
          loading={eager ? 'eager' : 'lazy'}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out group-hover:opacity-0"
        />
        {/* hover image */}
        <img
          alt={`${product.name} on model`}
          data-strk-img-id={`pc-${product.id}-hover-7m4q`}
          data-strk-img={`[${titleId}] worn on model close up neck ear warm light editorial`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="900"
          loading="lazy"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
        />

        {/* New badge (subtle) */}
        {product.isNew && (
          <span className="absolute left-4 top-4 z-10 bg-cream/90 px-2.5 py-1 text-[10px] uppercase tracking-[0.25em] text-ink">
            New
          </span>
        )}

        {/* Quick add — slides in on hover */}
        <button
          type="button"
          onClick={handleQuickAdd}
          aria-label={`Quick add ${product.name} to cart`}
          className="absolute bottom-4 left-4 right-4 z-10 flex translate-y-3 items-center justify-center gap-2 bg-ink/95 py-3 text-[11px] uppercase tracking-[0.28em] text-cream opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 hover:bg-ink-soft"
        >
          <Plus size={14} strokeWidth={1.5} />
          Add to Cart
        </button>
      </div>

      <div className="pt-5 text-center">
        <h3
          id={titleId}
          className={cn(
            'font-serif text-[15px] uppercase tracking-[0.22em] text-ink',
            'transition-colors group-hover:text-champagne-deep'
          )}
        >
          {product.name}
        </h3>
        <p
          id={descId}
          className="mt-1 text-[11px] uppercase tracking-[0.3em] text-mocha"
        >
          {product.category}
        </p>
        <p className="mt-2 text-sm tracking-wide text-ink">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
