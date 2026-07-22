import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import StarRating from '@/components/ui/StarRating';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, showQuickAdd = true }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-sand overflow-hidden mb-4">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs text-stone uppercase tracking-widest">{product.name}</span>
        </div>

        {/* Hover overlay with quick add */}
        {showQuickAdd && (
          <div
            className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ease-editorial ${
              hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
          >
            <button
              onClick={handleQuickAdd}
              className="w-full bg-white/95 backdrop-blur-sm text-charcoal py-3 text-xs font-medium tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-warm-gold hover:text-white transition-colors"
            >
              <ShoppingBag size={14} />
              Quick Add
            </button>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="space-y-1.5">
        <h3 className="font-serif text-sm tracking-[0.12em] uppercase text-charcoal">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-charcoal">${product.price}</span>
          {product.originalPrice && (
            <span className="text-xs text-stone line-through">${product.originalPrice}</span>
          )}
        </div>
        <div className="flex items-center gap-1.5">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[11px] text-stone">({product.reviewCount})</span>
        </div>
      </div>
    </Link>
  );
}
