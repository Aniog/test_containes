import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Check } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function ProductCard({ product, index = 0 }) {
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product.id, product.variants[0]?.id || 'gold', 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      aria-label={`${product.name}, ${formatPrice(product.price)}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-sand aspect-[4/5] hover-zoom">
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={`card-${product.id}-1`}
          data-strk-img={`[card-${product.id}-name] [card-${product.id}-subtitle] [card-${product.id}-material] [card-${product.id}-category]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: 1 }}
        />

        {/* Hover image — same query so swap is local; we crossfade with CSS */}
        <img
          alt=""
          aria-hidden="true"
          data-strk-img-id={`card-${product.id}-2`}
          data-strk-img={`[card-${product.id}-name] [card-${product.id}-subtitle] [card-${product.id}-material] [card-${product.id}-category]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-cream/95 px-3 py-1.5 text-[0.62rem] tracking-[0.18em] uppercase font-medium text-ink">
            <span className="block w-1.5 h-1.5 rounded-full bg-gold" />
            {product.badge}
          </span>
        )}

        {/* Quick add — appears on hover */}
        <button
          type="button"
          onClick={handleQuickAdd}
          className="absolute bottom-0 left-0 right-0 bg-cream/95 backdrop-blur-sm text-ink py-3.5 px-4 flex items-center justify-center gap-2 text-[0.7rem] tracking-[0.18em] uppercase font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out hover:bg-ink hover:text-cream"
          aria-label={`Quick add ${product.name} to cart`}
        >
          {added ? (
            <>
              <Check className="w-3.5 h-3.5" strokeWidth={1.5} /> Added
            </>
          ) : (
            <>
              <Plus className="w-3.5 h-3.5" strokeWidth={1.5} /> Quick Add
            </>
          )}
        </button>
      </div>

      {/* Info */}
      <div className="pt-4 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p
            id={`card-${product.id}-name`}
            className="product-name text-[0.72rem] text-ink truncate"
          >
            {product.name}
          </p>
          <p
            id={`card-${product.id}-subtitle`}
            className="text-[0.82rem] text-muted mt-1.5 editorial truncate"
          >
            {product.subtitle}
          </p>
          {/* Hidden text refs for image queries */}
          <span
            id={`card-${product.id}-material`}
            className="hidden"
          >{product.material === '18k-gold' ? '18K gold plated' : product.material}</span>
          <span
            id={`card-${product.id}-category`}
            className="hidden"
          >{product.category}</span>
        </div>
        <div className="text-right flex-shrink-0">
          <p className="text-sm font-medium text-ink">{formatPrice(product.price)}</p>
          {product.compareAt && (
            <p className="text-xs text-muted line-through mt-0.5">{formatPrice(product.compareAt)}</p>
          )}
        </div>
      </div>
    </Link>
  );
}