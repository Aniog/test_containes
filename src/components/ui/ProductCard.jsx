import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import { ShoppingBag, Eye } from 'lucide-react';

export default function ProductCard({ product, index = 0 }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);

  const placeholderColors = [
    'from-amber-900/80 to-stone-900',
    'from-rose-900/60 to-stone-900',
    'from-yellow-900/60 to-stone-900',
    'from-orange-900/60 to-stone-900',
    'from-amber-950/80 to-stone-900',
  ];

  const gradients = placeholderColors[index % placeholderColors.length];

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-warm-200 overflow-hidden mb-4">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradients} transition-transform duration-700 group-hover:scale-105`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <span className="font-serif text-gold-300/60 text-3xl sm:text-4xl italic tracking-wide">
                {product.name.split(' ')[0]}
              </span>
              <div className="w-12 h-px bg-gold-400/40 mx-auto mt-2" />
            </div>
          </div>
        </div>

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-gold-500 text-white text-[10px] font-sans font-semibold tracking-widest uppercase px-3 py-1.5">
            {product.badge}
          </span>
        )}

        {/* Hover overlay with actions */}
        <div
          className={`absolute inset-0 bg-dark-900/40 flex items-end justify-center pb-5 transition-opacity duration-300 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex gap-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                addItem(product);
              }}
              className="flex items-center gap-2 px-5 py-2.5 bg-cream text-dark-900 text-xs tracking-widest uppercase font-sans hover:bg-white transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Add to Cart
            </button>
            <Link
              to={`/product/${product.slug}`}
              className="flex items-center justify-center w-10 h-10 border border-cream/60 text-cream hover:bg-cream/10 transition-colors"
              aria-label="Quick view"
            >
              <Eye className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Product info */}
      <Link to={`/product/${product.slug}`} className="block group/link">
        <h3 className="font-sans text-xs sm:text-sm font-medium text-dark-900 uppercase tracking-[0.15em] group-hover/link:text-gold-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-muted mt-1 line-clamp-1">{product.shortDescription}</p>
        <div className="flex items-center gap-3 mt-2">
          <span className="font-serif text-base text-dark-900">${product.price}</span>
          {product.rating && (
            <div className="flex items-center gap-1">
              <span className="text-gold-500 text-xs">★</span>
              <span className="text-xs text-muted">{product.rating}</span>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}
