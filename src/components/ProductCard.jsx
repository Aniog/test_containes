import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, showQuickAdd = true }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-velmora-surfaceAlt overflow-hidden">
          {/* Primary placeholder */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-velmora-cream to-velmora-warm">
            <div className="w-24 h-24 rounded-full bg-velmora-gold/20 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-velmora-gold/30" />
            </div>
          </div>

          {/* Hover image placeholder */}
          <div
            className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br from-velmora-warm to-velmora-cream transition-opacity duration-500 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="w-28 h-28 rounded-full bg-velmora-gold/25 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-velmora-gold/35" />
            </div>
          </div>

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-velmora-base text-[10px] tracking-ultra uppercase px-3 py-1.5">
              {product.badge}
            </span>
          )}

          {/* Quick add button */}
          {showQuickAdd && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product, product.variants[0], 1);
              }}
              className={`absolute bottom-3 left-3 right-3 py-3 bg-white/95 backdrop-blur-sm text-velmora-base text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-velmora-base hover:text-white transition-all duration-300 ${
                hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Bag
            </button>
          )}
        </div>

        {/* Info */}
        <div className="mt-4 text-center">
          <h3 className="font-serif text-sm tracking-widest uppercase text-velmora-base">
            {product.name}
          </h3>
          <div className="flex items-center justify-center gap-1 mt-1.5">
            <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
            <span className="text-xs text-velmora-stone">{product.rating}</span>
            <span className="text-xs text-velmora-muted">({product.reviews})</span>
          </div>
          <p className="text-sm font-medium mt-1.5 text-velmora-base">${product.price}</p>
        </div>
      </Link>
    </div>
  );
}
