import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
  };

  return (
    <Link
      to={`/products/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-sand/40 overflow-hidden rounded-sm">
        {/* Gradient placeholder that shifts on hover */}
        <div className={`absolute inset-0 transition-all duration-700 ${
          hovered
            ? 'bg-gradient-to-br from-mocha/30 via-bronze/15 to-gold-light/20'
            : 'bg-gradient-to-br from-sand/40 via-pearl/50 to-sand/30'
        }`} />

        {/* Subtle jewelry silhouette hint */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`w-16 h-16 rounded-full border-2 transition-all duration-700 ${
            hovered ? 'border-gold/40 scale-110' : 'border-mocha/15'
          }`} />
          <div className={`absolute w-10 h-10 rounded-full border transition-all duration-700 ${
            hovered ? 'border-gold-light/30 scale-110 -translate-y-4' : 'border-mocha/10 -translate-y-3'
          }`} />
        </div>

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase bg-oxford text-cream rounded-sm">
            {product.badge}
          </span>
        )}
        {product.isNew && !product.badge && (
          <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase bg-bronze text-cream rounded-sm">
            New
          </span>
        )}

        {/* Quick add button */}
        <button
          onClick={handleAdd}
          className={`absolute bottom-3 right-3 p-2.5 bg-cream/95 text-oxford rounded-full shadow-lg hover:bg-bronze hover:text-cream transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag className="w-4 h-4" />
        </button>
      </div>

      {/* Info */}
      <div className="mt-4 space-y-1">
        <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-taupe">{product.category}</p>
        <h3 className="product-name text-sm font-semibold text-oxford">{product.name}</h3>
        <div className="flex items-center gap-1.5">
          <div className="flex items-center">
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
          <span className="text-[11px] text-taupe">({product.reviewCount})</span>
        </div>
        <p className="text-sm font-semibold text-oxford">${product.price}</p>
      </div>
    </Link>
  );
}
