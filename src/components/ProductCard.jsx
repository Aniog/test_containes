import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, index = 0 }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <Link to={`/product/${product.slug}`} className="block">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-velmora-cream-dark rounded-sm overflow-hidden mb-3">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border border-velmora-gold/40 flex items-center justify-center">
              <div className="w-3 h-3 bg-velmora-gold rounded-full" />
            </div>
          </div>
          {/* Hover overlay */}
          <div
            className={`absolute inset-0 bg-black/5 transition-opacity duration-300 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>

        {/* Info */}
        <div className="space-y-1">
          <h3 className="font-serif text-[13px] md:text-[14px] font-medium tracking-[0.1em] uppercase text-velmora-charcoal">
            {product.name}
          </h3>
          <div className="flex items-center gap-2">
            <span className="font-sans text-[13px] font-medium text-velmora-charcoal">
              ${product.price}
            </span>
            <span className="text-velmora-border-dark">|</span>
            <div className="flex items-center gap-0.5">
              <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
              <span className="font-sans text-[11px] text-velmora-warm-gray">
                {product.rating}
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* Quick add button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          addItem(product, 1, product.tone[0]);
        }}
        className={`absolute bottom-[52px] right-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm transition-all duration-300 ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        } hover:bg-velmora-charcoal hover:text-white text-velmora-charcoal`}
        aria-label="Add to cart"
      >
        <ShoppingBag className="w-4 h-4" />
      </button>
    </div>
  );
}