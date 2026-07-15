import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import Stars from '@/components/ui/Stars';

export default function ProductCard({ product, sectionTitleId }) {
  const { addItem } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, { variant: 'Gold', quantity: 1 });
  };

  return (
    <Link
      to={`/products/${product.slug}`}
      className="group block"
    >
      <div className="relative overflow-hidden bg-sand aspect-[4/5]">
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] ${sectionTitleId ? `[${sectionTitleId}]` : ''}`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Secondary image (revealed on hover) */}
        <img
          alt={`${product.name} alternate view`}
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.descId}] ${product.name} worn on model`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {product.badge && (
          <span className="absolute left-4 top-4 bg-cream/90 px-3 py-1 text-[10px] uppercase tracking-widest2 text-ink">
            {product.badge}
          </span>
        )}

        {/* Quick add to cart */}
        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={handleAdd}
            className="flex w-full items-center justify-center gap-2 bg-ink/90 px-4 py-3 text-[11px] uppercase tracking-widest2 text-cream backdrop-blur-sm transition-colors hover:bg-gold"
          >
            <ShoppingBag width={14} height={14} />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3
          id={product.titleId}
          className="font-serif text-lg uppercase tracking-widest3 text-ink"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.shortDesc}
        </p>
        <div className="mt-1 flex items-center justify-center gap-2">
          <Stars rating={product.rating} size={12} />
          <span className="text-[11px] text-stone-light">({product.reviews})</span>
        </div>
        <p className="mt-2 text-sm text-stone">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
