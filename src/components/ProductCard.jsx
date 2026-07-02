import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { formatPrice } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import StarRating from './StarRating';

const PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function ProductCard({ product, className }) {
  const { addItem } = useCart();
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.tones[0] || 'gold', 1);
  };

  return (
    <article
      className={cn('group relative flex flex-col', className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        onClick={() => navigate(`/products/${product.slug}`)}
        className="relative overflow-hidden bg-sand aspect-[4/5] cursor-pointer"
        role="link"
        aria-label={`View ${product.name}`}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            navigate(`/products/${product.slug}`);
          }
        }}
      >
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 bg-espresso text-cream text-[10px] uppercase tracking-extra-wide px-2.5 py-1 pointer-events-none">
            {product.badge}
          </span>
        )}

        <img
          data-strk-img-id={product.imgId}
          data-strk-img={product.images.primaryQuery}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src={PLACEHOLDER}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <img
          data-strk-img-id={product.hoverImgId}
          data-strk-img={product.images.hoverQuery}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src={PLACEHOLDER}
          alt={`${product.name} alternate view`}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-opacity duration-600',
            hovered ? 'opacity-100' : 'opacity-0'
          )}
        />

        <button
          onClick={handleQuickAdd}
          className={cn(
            'absolute bottom-4 left-4 right-4 z-10 flex items-center justify-center gap-2 bg-espresso text-cream py-3 text-xs uppercase tracking-extra-wide transition-all duration-300',
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          )}
          aria-label={`Quick add ${product.name} to cart`}
        >
          <ShoppingBag size={14} />
          Quick Add
        </button>
      </div>

      <div className="pt-4 text-center">
        <h3 className="font-serif text-sm uppercase tracking-extra-wide text-espresso">
          <Link to={`/products/${product.slug}`}>{product.name}</Link>
        </h3>
        <div className="mt-2 flex flex-col items-center gap-1.5">
          <StarRating rating={product.rating} size={12} />
          <span className="text-sm font-medium text-espresso">{formatPrice(product.price)}</span>
        </div>
      </div>
    </article>
  );
}
