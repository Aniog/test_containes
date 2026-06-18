import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPriceWithCents } from '@/lib/utils';

export default function ProductCard({ product, priority = false }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);

  const primary = product.images?.[0];
  const secondary = product.images?.[1] || product.images?.[0];

  const titleId = `product-${product.id}-title`;
  const tagId = `product-${product.id}-tag`;

  return (
    <article
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link
        to={`/product/${product.id}`}
        className="block relative overflow-hidden bg-bone aspect-[3/4]"
      >
        <img
          alt={product.name}
          data-strk-img-id={primary?.id || `${product.id}-card-primary`}
          data-strk-img={`[${tagId}] [${titleId}] gold demi fine jewelry on warm neutral background editorial`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${
            hovered ? 'opacity-0' : 'opacity-100'
          }`}
          loading={priority ? 'eager' : 'lazy'}
        />
        <img
          alt=""
          aria-hidden="true"
          data-strk-img-id={secondary?.id || `${product.id}-card-secondary`}
          data-strk-img={`[${titleId}] gold jewelry styled on model close up warm light`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${
            hovered ? 'opacity-100' : 'opacity-0'
          } scale-[1.03]`}
          loading="lazy"
        />

        {product.bestseller && (
          <span className="absolute top-4 left-4 text-[10px] tracking-[0.3em] uppercase bg-cream/95 text-ink px-3 py-1.5">
            Bestseller
          </span>
        )}

        {/* Quick add */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            addItem(product);
          }}
          className={`absolute left-4 right-4 bottom-4 bg-ink text-cream py-3 text-[11px] tracking-[0.3em] uppercase flex items-center justify-center gap-2 transition-all duration-500 ease-out ${
            hovered
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-3 pointer-events-none'
          }`}
        >
          <Plus className="w-3 h-3" strokeWidth={2} />
          Add to Cart
        </button>
      </Link>

      <div className="pt-5 px-1">
        <Link to={`/product/${product.id}`}>
          <h3
            id={titleId}
            className="font-serif text-sm md:text-[15px] tracking-[0.18em] uppercase text-ink hover:text-champagne-deep transition-colors"
          >
            {product.name}
          </h3>
        </Link>
        <p id={tagId} className="text-xs text-mute mt-1">
          {product.tagline}
        </p>
        <p className="mt-2 text-sm font-medium text-ink">
          {formatPriceWithCents(product.price)}
        </p>
      </div>
    </article>
  );
}
