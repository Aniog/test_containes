import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/data/products';
import StarRating from '@/components/product/StarRating';

/**
 * Editorial product card. Hover reveals the second (on-model) image and a
 * quick "Add to Cart" bar slides up over the image.
 */
export default function ProductCard({ product, eager = false }) {
  const { addItem, openCart } = useCart();

  const handleQuickAdd = (event) => {
    event.preventDefault();
    event.stopPropagation();
    addItem(product.id, product.variants[0], 1);
    openCart();
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-4 focus-visible:ring-offset-ivory"
      aria-label={`${product.name} — ${formatPrice(product.price)}`}
    >
      <div className="relative overflow-hidden bg-sand aspect-[4/5]">
        <img
          data-strk-img-id={product.imgIds.main}
          data-strk-img={`[${product.textIds.tagline}] [${product.textIds.name}] demi-fine gold jewelry product photograph on warm neutral background, editorial studio light`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="700"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          loading={eager ? 'eager' : 'lazy'}
          className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out-soft group-hover:scale-105 group-hover:opacity-0"
        />
        <img
          data-strk-img-id={product.imgIds.alt}
          data-strk-img={`[${product.textIds.tagline}] [${product.textIds.name}] worn by elegant woman, warm lifestyle photography, close-up on skin`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="700"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} worn`}
          loading="lazy"
          className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition-all duration-700 ease-out-soft group-hover:scale-100 group-hover:opacity-100"
        />

        {(product.isNew || product.compareAt) && (
          <span className="absolute left-3 top-3 bg-espresso/85 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-ivory">
            {product.isNew ? 'New' : 'Gift'}
          </span>
        )}

        <button
          type="button"
          onClick={handleQuickAdd}
          className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-2 bg-ivory/95 py-3.5 text-[11px] uppercase tracking-[0.25em] text-ink backdrop-blur transition-transform duration-400 ease-out-soft hover:bg-espresso hover:text-ivory group-hover:translate-y-0"
          aria-label={`Quick add ${product.name} to cart`}
        >
          <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
          Add to Cart
        </button>
      </div>

      <div className="border-t border-hairline pt-4">
        <div className="flex items-start justify-between gap-3">
          <h3
            id={product.textIds.name}
            className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-ink md:text-xs"
          >
            {product.name}
          </h3>
          <div className="flex items-baseline gap-2 whitespace-nowrap">
            {product.compareAt && (
              <span className="text-xs text-taupe line-through">{formatPrice(product.compareAt)}</span>
            )}
            <span className="text-xs font-semibold tracking-wide text-cocoa md:text-sm">
              {formatPrice(product.price)}
            </span>
          </div>
        </div>
        <p id={product.textIds.tagline} className="mt-1.5 text-xs leading-relaxed text-taupe">
          {product.tagline}
        </p>
        <div className="mt-2">
          <StarRating rating={product.rating} reviews={product.reviews} size="sm" />
        </div>
      </div>
    </Link>
  );
}
