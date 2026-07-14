import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice, cn } from '@/lib/utils';

export default function ProductCard({ product, compact = false }) {
  const [hovered, setHovered] = useState(false);
  const { addItem, openCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold');
    openCart();
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className={cn(
        'relative overflow-hidden bg-velmora-cream',
        compact ? 'aspect-square' : 'aspect-[3/4]'
      )}>
        {/* Primary image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={cn(
            'w-full h-full object-cover transition-all duration-700',
            hovered && product.images[1] ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          )}
          loading="lazy"
        />
        {/* Hover image */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-all duration-700',
              hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            )}
            loading="lazy"
          />
        )}

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-velmora-black text-velmora-ivory font-sans text-[10px] uppercase tracking-[0.15em] px-3 py-1.5">
            {product.badge}
          </span>
        )}

        {/* Quick add button */}
        <button
          onClick={handleAddToCart}
          className={cn(
            'absolute bottom-3 left-3 right-3 btn-gold text-center flex items-center justify-center gap-2 transition-all duration-300',
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          )}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Add to Cart
        </button>
      </div>

      {/* Info */}
      <div className="pt-4">
        <p className="product-name text-velmora-charcoal group-hover:text-velmora-gold transition-colors duration-300">
          {product.name}
        </p>
        {!compact && (
          <p className="text-xs text-velmora-stone mt-1">{product.subtitle}</p>
        )}
        <div className="flex items-center gap-3 mt-2">
          <span className="font-sans text-sm font-semibold text-velmora-black">
            {formatPrice(product.price)}
          </span>
          {!compact && product.rating && (
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
              <span className="text-xs text-velmora-stone">{product.rating}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
