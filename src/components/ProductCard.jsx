import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import StarRating from './StarRating';

export default function ProductCard({ product, children }) {
  const { addToCart } = useCart();
  const titleId = `product-title-${product.id}`;
  const descId = `product-desc-${product.id}`;

  return (
    <article className="group relative flex flex-col">
      <Link
        to={`/products/${product.id}`}
        className="relative aspect-[3/4] overflow-hidden bg-cream-warm"
        aria-label={product.name}
      >
        {children}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            addToCart(product, 1, product.tone?.[0] || 'gold');
          }}
          className="absolute bottom-4 left-4 right-4 flex translate-y-4 items-center justify-center gap-2 bg-ink py-3 text-sm font-medium uppercase tracking-wider text-cream opacity-0 transition-all duration-300 hover:bg-ink-soft group-hover:translate-y-0 group-hover:opacity-100"
        >
          <ShoppingBag size={16} strokeWidth={1.5} />
          Add to Cart
        </button>
      </Link>

      <div className="pt-4">
        <div className="mb-1.5 flex items-center gap-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-xs text-taupe">({product.reviewCount})</span>
        </div>
        <h3
          id={titleId}
          className="font-serif text-base font-semibold uppercase tracking-wider text-ink"
        >
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </h3>
        <p id={descId} className="sr-only">
          {product.category} — {product.material}
        </p>
        <p className="mt-1 font-sans text-sm font-medium text-ink-soft">
          ${product.price}
        </p>
      </div>
    </article>
  );
}
