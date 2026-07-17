import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = () => {
    addItem(product, product.variants[0], 1);
  };

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-surface rounded-md overflow-hidden mb-4">
        <Link to={`/product/${product.id}`}>
          <img
            src={`https://placehold.co/600x800/1A1918/C8A97E?text=${encodeURIComponent(product.name)}`}
            alt={product.name}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              hovered ? 'scale-105' : 'scale-100'
            }`}
          />
        </Link>

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-accent text-base text-[10px] font-sans font-semibold uppercase tracking-wider px-2.5 py-1 rounded pointer-events-none">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-3 left-3 right-3 py-2.5 bg-warm-white text-base font-sans text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 rounded transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <ShoppingBag size={14} />
          Quick Add
        </button>
      </div>

      {/* Info */}
      <Link to={`/product/${product.id}`}>
        <h3 className="font-serif text-sm uppercase tracking-widest text-warm-white group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mt-1.5">
          <span className="font-sans text-sm text-warm-white">${product.price}</span>
          {product.originalPrice && (
            <span className="font-sans text-sm text-taupe line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
        <div className="flex items-center gap-1 mt-1">
          <Star size={12} className="fill-accent text-accent" />
          <span className="text-xs text-taupe">
            {product.rating} ({product.reviews})
          </span>
        </div>
      </Link>
    </div>
  );
}
