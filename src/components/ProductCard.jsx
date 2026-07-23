import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, showQuickAdd = true }) {
  const [hovered, setHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-parchment rounded-sm aspect-[4/5]">
        {/* Main image placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs text-warmgray uppercase tracking-widest">{product.name}</span>
        </div>

        {/* Hover image overlay */}
        {hovered && (
          <div className="absolute inset-0 bg-champagne/30 flex items-center justify-center transition-opacity duration-300">
            <span className="text-xs text-charcoal-muted uppercase tracking-widest">Alternate View</span>
          </div>
        )}

        {/* Quick add */}
        {showQuickAdd && hovered && (
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product, 'gold', 1);
            }}
            className="absolute bottom-3 left-3 right-3 py-2.5 bg-white/90 backdrop-blur-sm text-charcoal text-xs tracking-widest uppercase font-medium flex items-center justify-center gap-2 hover:bg-white transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Quick Add
          </button>
        )}
      </Link>

      <div className="mt-3 text-center">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-xs tracking-widest-xl uppercase text-charcoal hover:text-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-center gap-1 mt-1.5">
          <Star className="w-3 h-3 fill-gold text-gold" />
          <span className="text-xs text-warmgray">{product.rating}</span>
          <span className="text-xs text-warmgray-light">({product.reviews})</span>
        </div>
        <p className="mt-1.5 text-sm font-medium text-charcoal">${product.price}</p>
      </div>
    </div>
  );
}
