import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCartDispatch } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCartDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variant);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-sand/30 overflow-hidden mb-4">
        {/* Primary "image" */}
        <div className="absolute inset-0 bg-gradient-to-b from-gold/15 via-gold/5 to-sand/50 transition-opacity duration-500 group-hover:opacity-0" />
        {/* Secondary "image" (hover state) */}
        <div className="absolute inset-0 bg-gradient-to-b from-rose/15 via-gold/10 to-charcoal/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* New badge */}
        {product.isNew && (
          <span className="absolute top-3 left-3 z-10 text-[10px] tracking-widest uppercase font-sans font-medium bg-cream/90 text-charcoal px-2 py-1">
            New
          </span>
        )}

        {/* Quick add to cart button */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-3 right-3 z-10 w-10 h-10 rounded-full bg-cream shadow-md flex items-center justify-center transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
          aria-label="Add to cart"
        >
          <ShoppingBag className="w-4 h-4 text-charcoal" />
        </button>
      </div>

      {/* Info */}
      <div>
        <p className="font-serif text-[11px] tracking-[0.2em] uppercase text-charcoal mb-1">
          {product.name}
        </p>
        <div className="flex items-center gap-1 mb-1.5">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating)
                    ? 'fill-gold text-gold'
                    : 'fill-sand text-sand'
                }`}
              />
            ))}
          </div>
          <span className="text-[10px] text-taupe ml-1">
            ({product.reviews})
          </span>
        </div>
        <p className="text-sm font-medium text-charcoal">${product.price}</p>
      </div>
    </Link>
  );
}
