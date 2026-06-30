import { useState, useRef } from 'react';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [quickAdding, setQuickAdding] = useState(false);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setQuickAdding(true);
    addItem(product, 'gold', 1);
    setTimeout(() => setQuickAdding(false), 1200);
  };

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const hasHalf = rating - full >= 0.3;
    return (
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            className={`w-3 h-3 ${
              i < full
                ? 'fill-gold-400 text-gold-400'
                : i === full && hasHalf
                ? 'fill-gold-400/50 text-gold-400'
                : 'text-charcoal-200'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div ref={containerRef} className="relative overflow-hidden bg-cream-100 aspect-square">
        {/* Primary image */}
        <img
          data-strk-img-id={`product-${product.id}-primary`}
          data-strk-img={`[product-${product.id}-name] ${product.category} jewelry ${product.material}`}
          data-strk-img-ratio="1x1"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        {/* Hover image */}
        <img
          data-strk-img-id={`product-${product.id}-hover`}
          data-strk-img={`[product-${product.id}-name] ${product.category} worn model elegant`}
          data-strk-img-ratio="1x1"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} styled`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {/* Quick add button */}
        <div
          className={`absolute bottom-0 left-0 right-0 transition-all duration-400 ease-out ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={handleQuickAdd}
            className="w-full flex items-center justify-center gap-2 bg-charcoal-950/90 backdrop-blur-sm text-cream-50 py-3 text-xs uppercase tracking-ultra-wide font-medium hover:bg-charcoal-950 transition-colors duration-200"
          >
            <ShoppingBag className="w-4 h-4" />
            {quickAdding ? 'Added' : 'Quick Add'}
          </button>
        </div>

        {product.tags?.includes('bestseller') && (
          <span className="absolute top-3 left-3 bg-charcoal-950 text-cream-50 text-[10px] uppercase tracking-ultra-wide py-1 px-3 font-medium">
            Bestseller
          </span>
        )}
      </div>

      <div className="pt-4 pb-2">
        <h3
          id={`product-${product.id}-name`}
          className="font-product-name text-charcoal-950 text-sm md:text-base"
        >
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-charcoal-900 font-medium text-sm">
            {formatPrice(product.price)}
          </span>
          {renderStars(product.rating)}
          <span className="text-charcoal-400 text-xs">({product.reviewCount})</span>
        </div>
      </div>
    </Link>
  );
}
