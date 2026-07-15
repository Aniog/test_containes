import { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/data/products';
import { StarRating } from './StarRating';

export function ProductCard({ product, sectionTitleId }) {
  const { addItem } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const titleId = `product-title-${product.id}`;
  const descId = `product-desc-${product.id}`;

  return (
    <article
      className="group relative flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/products/${product.slug}`} className="relative block overflow-hidden bg-blush aspect-[3/4]">
        <img
          data-strk-img-id={`product-card-${product.id}`}
          data-strk-img={`[${descId}] [${titleId}] [${sectionTitleId || 'velmora-shop'}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`h-full w-full object-cover transition-opacity duration-500 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <img
          data-strk-img-id={`product-hover-${product.id}`}
          data-strk-img={`[${titleId}] [${sectionTitleId || 'velmora-shop'}] gold jewelry detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            addItem(product, product.variants[0], 1);
          }}
          className={`absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 bg-cream/95 py-3 text-xs font-medium uppercase tracking-wide text-ink transition-all duration-300 hover:bg-gold hover:text-ink ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <ShoppingBag size={14} />
          Add to Cart
        </button>
      </Link>

      <div className="mt-4 flex flex-col items-start text-left">
        <div className="flex items-center gap-2 mb-1">
          <StarRating rating={product.rating} size={12} />
          <span className="text-xs text-warmGray">({product.reviewCount})</span>
        </div>
        <h3 id={titleId} className="product-name group-hover:text-goldDark transition-colors">
          <Link to={`/products/${product.slug}`}>{product.name}</Link>
        </h3>
        <p id={descId} className="sr-only">{product.description}</p>
        <p className="mt-1 text-sm font-medium">{formatPrice(product.price)}</p>
      </div>
    </article>
  );
}
