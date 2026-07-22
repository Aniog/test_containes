import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => {
      const filled = star <= Math.round(rating);
      return (
        <Star
          key={star}
          className="w-3 h-3"
          style={{
            fill: filled ? '#B8965A' : '#E8E0D4',
            color: filled ? '#B8965A' : '#E8E0D4',
          }}
        />
      );
    })}
  </div>
);

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants?.[0] || 'Gold Tone', 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative overflow-hidden bg-cream aspect-[3/4]">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        {/* Secondary image */}
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry worn on model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags?.includes('bestseller') && (
            <span className="bg-gold text-ivory font-inter text-[9px] uppercase tracking-[0.1em] px-2 py-1">
              Bestseller
            </span>
          )}
          {product.tags?.includes('new') && (
            <span className="bg-charcoal text-ivory font-inter text-[9px] uppercase tracking-[0.1em] px-2 py-1">
              New
            </span>
          )}
          {product.tags?.includes('gift') && (
            <span className="border border-gold text-gold font-inter text-[9px] uppercase tracking-[0.1em] px-2 py-1 bg-ivory/80">
              Gift
            </span>
          )}
        </div>

        {/* Quick add button */}
        {showQuickAdd && (
          <div
            className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
              hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <button
              onClick={handleQuickAdd}
              className={`w-full py-3 font-inter text-xs uppercase tracking-[0.1em] flex items-center justify-center gap-2 transition-colors duration-300 ${
                added
                  ? 'bg-charcoal text-ivory'
                  : 'bg-ivory/95 text-charcoal hover:bg-gold hover:text-ivory'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              {added ? 'Added!' : 'Quick Add'}
            </button>
          </div>
        )}
      </div>

      {/* Product info */}
      <div className="pt-4 pb-2">
        <p
          id={product.titleId}
          className="font-cormorant text-sm uppercase tracking-[0.12em] text-charcoal leading-tight group-hover:text-gold transition-colors duration-200"
        >
          {product.name}
        </p>
        <p
          id={product.descId}
          className="font-inter text-xs text-mist mt-1 line-clamp-1 hidden"
          aria-hidden="true"
        >
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between mt-2">
          <span className="font-inter text-sm font-medium text-charcoal">
            ${product.price}
          </span>
          <StarRating rating={product.rating} />
        </div>
      </div>
    </Link>
  );
};

export { StarRating };
export default ProductCard;
