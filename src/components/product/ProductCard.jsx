import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice, cn } from '../../lib/utils';

export default function ProductCard({ product, index = 0 }) {
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold', 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-obsidian-900 overflow-hidden rounded-sm mb-4">
        {/* Primary image */}
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Gold overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-gold-500 text-obsidian-950 text-[10px] font-bold uppercase tracking-widest-xl px-3 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick add button */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 left-4 right-4 bg-cream-50 text-obsidian-950 font-sans text-xs font-semibold uppercase tracking-widest-xl py-3 flex items-center justify-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-gold-400"
        >
          <ShoppingBag className="w-4 h-4" />
          Add to Bag
        </button>
      </div>

      {/* Product info */}
      <div className="space-y-1.5">
        <h3 className="product-name text-sm md:text-base !tracking-[0.15em]">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  'w-3 h-3',
                  i < Math.floor(product.rating) ? 'fill-gold-400 text-gold-400' : 'text-obsidian-600'
                )}
              />
            ))}
          </div>
          <span className="text-[11px] text-obsidian-500">({product.reviewCount})</span>
        </div>
        <p className="price text-sm">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
