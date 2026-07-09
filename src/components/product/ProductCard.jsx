import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice, cn } from '@/lib/utils';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0].name);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-brand-100 to-warm-200 rounded-sm mb-4">
        {/* Primary image */}
        <img
          src={product.images[0].src}
          alt={product.images[0].alt}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-all duration-700',
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          )}
        />
        {/* Hover image */}
        <img
          src={product.images[1].src}
          alt={product.images[1].alt}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-all duration-700',
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          )}
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-espresso-950 text-warm-100 text-[10px] font-bold uppercase tracking-ultra-wide px-3 py-1.5 z-10">
            {product.badge}
          </span>
        )}

        {/* Quick add button */}
        <div
          className={cn(
            'absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 z-10',
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          )}
        >
          <button
            onClick={handleQuickAdd}
            className="w-full bg-espresso-950/90 backdrop-blur-sm text-white py-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-ultra-wide hover:bg-espresso-950 transition-colors"
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>

      </div>

      {/* Product info */}
      <div className="space-y-1.5">
        <h3 className="product-name text-sm md:text-base">{product.name}</h3>
        <div className="flex items-center gap-1.5">
          <div className="star-rating">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className={i < Math.floor(product.rating) ? 'fill-current' : 'text-brand-200'}
              />
            ))}
          </div>
          <span className="text-xs text-warm-500">({product.reviewCount})</span>
        </div>
        <p className="price-text">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
