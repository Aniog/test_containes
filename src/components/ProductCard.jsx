import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import StarRating from './StarRating';

export default function ProductCard({ product, index = 0 }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const imgIdA = `product-${product.id}-a-${index}`;
  const imgIdB = `product-${product.id}-b-${index}`;
  const titleId = `product-title-${product.id}`;
  const descId = `product-desc-${product.id}`;

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants?.[0] || null, 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image wrapper */}
      <div className="relative aspect-[3/4] overflow-hidden bg-velmora-cream-dark mb-4">
        {/* Primary image */}
        <img
          data-strk-img-id={imgIdA}
          data-strk-img={`[${descId}] [${titleId}] ${product.category} jewelry gold`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.displayName}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            hovered ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {/* Hover image */}
        <img
          data-strk-img-id={imgIdB}
          data-strk-img={`[${titleId}] ${product.category} jewelry detail gold`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.displayName} detail`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 px-2.5 py-1 bg-velmora-charcoal text-velmora-cream text-[10px] font-semibold uppercase tracking-widest">
            {product.badge}
          </span>
        )}

        {/* Quick add button */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-4 left-4 right-4 py-3 bg-velmora-charcoal text-velmora-cream text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <ShoppingBag size={14} />
          Quick Add
        </button>
      </div>

      {/* Info */}
      <div>
        <h3
          id={titleId}
          className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-velmora-charcoal"
        >
          {product.name}
        </h3>
        <p
          id={descId}
          className="mt-1 font-sans text-xs text-velmora-stone line-clamp-1"
        >
          {product.shortDescription}
        </p>
        <div className="mt-2 flex items-center gap-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[11px] text-velmora-stone">({product.reviewCount})</span>
        </div>
        <p className="mt-2 font-sans text-sm font-medium text-velmora-charcoal">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}
