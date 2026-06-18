import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function ProductCard({ product, priority = false }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);

  const titleId = `product-${product.id}-title`;
  const descId = `product-${product.id}-hint`;

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, { variant: product.variants[0] });
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-cream aspect-[3/4]">
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={`product-${product.id}-img-primary`}
          data-strk-img={`[${descId}] [${titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width={priority ? '900' : '700'}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.04] group-hover:opacity-0"
        />
        {/* Secondary image (hover reveal) */}
        <img
          alt=""
          aria-hidden="true"
          data-strk-img-id={`product-${product.id}-img-secondary`}
          data-strk-img={`[${descId}] [${titleId}] alternate angle`}
          data-strk-img-ratio="3x4"
          data-strk-img-width={priority ? '900' : '700'}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-[1.04]"
        />

        {/* Quick add overlay */}
        <div
          className={`absolute inset-x-0 bottom-0 px-4 pb-4 transition-all duration-500 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <button
            type="button"
            onClick={handleQuickAdd}
            className="w-full bg-ivory text-espresso text-[11px] uppercase tracking-eyebrow py-3 hover:bg-espresso hover:text-ivory transition-colors duration-300"
          >
            Quick Add — {formatPrice(product.price)}
          </button>
        </div>
      </div>

      <div className="mt-4 px-1">
        <h3
          id={titleId}
          className="font-serif text-sm md:text-base uppercase tracking-editorial text-espresso group-hover:text-gold transition-colors duration-300"
        >
          {product.name}
        </h3>
        <span id={descId} className="sr-only">
          {product.queryHint}
        </span>
        <div className="mt-1.5 flex items-baseline justify-between">
          <p className="text-xs uppercase tracking-eyebrow text-mocha">
            {product.material}
          </p>
          <p className="text-sm text-espresso font-medium">
            {formatPrice(product.price)}
          </p>
        </div>
      </div>
    </Link>
  );
}
