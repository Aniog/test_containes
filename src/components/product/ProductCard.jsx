import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCart, formatPrice } from '@/context/CartContext';
import { cn } from '@/lib/utils';

export default function ProductCard({ product, priority = false }) {
  const { addItem } = useCart();

  const titleId = `product-${product.id}-title`;
  const descId = `product-${product.id}-desc`;

  return (
    <article className="group relative flex flex-col">
      <Link
        to={`/product/${product.id}`}
        className="block relative overflow-hidden bg-cream aspect-[4/5]"
        aria-label={product.name}
      >
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${descId}] [${titleId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width={priority ? '700' : '520'}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out group-hover:opacity-0"
        />
        {/* Hover image */}
        <img
          data-strk-img-id={product.imgIdAlt}
          data-strk-img={`${product.altImgQuery || ''} [${titleId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="520"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
        />

        {/* Quick add button */}
        <div
          className={cn(
            'absolute inset-x-3 bottom-3 opacity-0 translate-y-2',
            'transition-all duration-500 ease-out',
            'group-hover:opacity-100 group-hover:translate-y-0'
          )}
        >
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product);
            }}
            className="w-full bg-ivory/95 backdrop-blur text-ink py-3 text-[10px] tracking-[0.3em] uppercase font-medium hover:bg-ink hover:text-ivory transition-colors duration-300"
          >
            Add to Bag
          </button>
        </div>
      </Link>

      <div className="pt-5 pb-2 flex flex-col gap-1.5">
        <p className="text-[10px] uppercase tracking-[0.3em] text-ink-soft" id={descId}>
          {product.categoryLabel}
        </p>
        <Link
          to={`/product/${product.id}`}
          id={titleId}
          className="font-serif text-base md:text-lg uppercase tracking-[0.2em] text-ink hover:text-gold-deep transition-colors duration-300"
        >
          {product.name}
        </Link>
        <div className="flex items-center justify-between mt-1">
          <p className="text-sm text-ink">{formatPrice(product.price)}</p>
          <div className="flex items-center gap-1 text-ink-soft">
            <Star className="w-3 h-3 fill-gold text-gold" strokeWidth={1} />
            <span className="text-xs">{product.rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
