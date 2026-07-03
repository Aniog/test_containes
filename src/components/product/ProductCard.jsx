import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={10}
          className={s <= Math.round(rating) ? 'text-gold-400 fill-gold-400' : 'text-charcoal-300'}
        />
      ))}
    </div>
  );
}

export default function ProductCard({ product, showReviews = false }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-cream-100 overflow-hidden mb-3">
        <img
          src={product.images[0]}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
          style={{ opacity: hovered && product.images[1] ? 0 : 1, transform: hovered ? 'scale(1.03)' : 'scale(1)' }}
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} view 2`}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
            style={{ opacity: hovered ? 1 : 0, transform: hovered ? 'scale(1)' : 'scale(1.03)' }}
          />
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags.includes('bestseller') && (
            <span className="bg-charcoal-900 text-cream-50 text-[9px] font-sans font-semibold uppercase tracking-ultra-wide px-2.5 py-1">
              Bestseller
            </span>
          )}
          {product.tags.includes('new') && (
            <span className="bg-gold-500 text-cream-50 text-[9px] font-sans font-semibold uppercase tracking-ultra-wide px-2.5 py-1">
              New
            </span>
          )}
        </div>

        {/* Quick add */}
        <div
          className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-gentle"
        >
          <button
            onClick={handleAdd}
            className="w-full bg-charcoal-900 text-cream-50 text-[10px] font-sans font-semibold uppercase tracking-ultra-wide py-2.5 hover:bg-gold-600 transition-colors duration-200"
          >
            {added ? '✓ Added to Cart' : '+ Add to Cart'}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-1">
        {showReviews && (
          <div className="flex items-center gap-1.5">
            <StarRating rating={product.rating} />
            <span className="text-[10px] font-sans text-charcoal-400">({product.reviews})</span>
          </div>
        )}
        <p className="product-name text-charcoal-900 text-[11px]">
          {product.name}
        </p>
        <p className="price text-base">${product.price}</p>
      </div>
    </Link>
  );
}
