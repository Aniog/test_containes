import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';

export default function ProductCard({ product, onQuickAdd }) {
  const [hovered, setHovered] = useState(false);
  const { openCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onQuickAdd?.(product);
    openCart();
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-velmora-sand mb-3 sm:mb-4">
        {/* Primary image */}
        <img
          src={`https://placehold.co/600x800/f7f4ef/c9a96e?text=${encodeURIComponent(product.name)}`}
          alt={product.name}
          className={cn(
            'absolute inset-0 h-full w-full object-cover transition-opacity duration-500',
            hovered ? 'opacity-0' : 'opacity-100'
          )}
        />
        {/* Hover image */}
        <img
          src={`https://placehold.co/600x800/ede6db/a88a4e?text=${encodeURIComponent(product.name)}+Alt`}
          alt={`${product.name} alternate view`}
          className={cn(
            'absolute inset-0 h-full w-full object-cover transition-opacity duration-500',
            hovered ? 'opacity-100' : 'opacity-0'
          )}
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 px-2.5 py-1 bg-velmora-charcoal text-velmora-white text-[10px] font-semibold tracking-editorial uppercase">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <button
          type="button"
          onClick={handleQuickAdd}
          className={cn(
            'absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 py-2.5 bg-velmora-white/95 backdrop-blur-sm text-velmora-charcoal text-xs font-semibold tracking-editorial uppercase transition-all duration-300',
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
          )}
        >
          <ShoppingBag className="h-3.5 w-3.5" />
          Add to Bag
        </button>
      </div>

      <div className="space-y-1">
        <h3 className="font-serif text-sm sm:text-base font-semibold tracking-ultra-wide uppercase text-velmora-charcoal group-hover:text-velmora-gold transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-velmora-muted capitalize">{product.category}</p>
        <div className="flex items-center justify-between pt-1">
          <span className="text-sm font-medium text-velmora-charcoal">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-velmora-gold text-velmora-gold" />
            <span className="text-xs text-velmora-muted">{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
