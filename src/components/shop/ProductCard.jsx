import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

/**
 * imageSlot — rendered image area passed in from the parent.
 * Images must be rendered in the parent file (where product data is imported)
 * so the strk-img plugin can statically resolve data-strk-img-id values.
 */
export default function ProductCard({ product, imageSlot }) {
  const { addItem } = useCart();

  return (
    <div className="group flex flex-col">
      {/* Image area */}
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-cream aspect-[3/4]">
        {imageSlot}

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.tags?.includes('bestseller') && (
            <span className="bg-obsidian text-ivory font-inter text-[9px] uppercase tracking-widest px-2 py-1">
              Bestseller
            </span>
          )}
          {product.tags?.includes('new') && (
            <span className="bg-gold text-white font-inter text-[9px] uppercase tracking-widest px-2 py-1">
              New
            </span>
          )}
        </div>

        {/* Quick add */}
        <button
          onClick={(e) => {
            e.preventDefault();
            addItem(product);
          }}
          className="absolute bottom-0 left-0 right-0 bg-obsidian/90 text-ivory font-inter text-[10px] uppercase tracking-widest py-3 flex items-center justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10"
        >
          <ShoppingBag size={12} strokeWidth={1.5} />
          Quick Add
        </button>
      </Link>

      {/* Info */}
      <div className="pt-4 flex flex-col gap-1">
        <div className="flex items-center gap-1 mb-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={9}
              stroke={i < Math.floor(product.rating) ? '#C9A96E' : '#C9A96E4D'}
              fill={i < Math.floor(product.rating) ? '#C9A96E' : 'none'}
            />
          ))}
          <span className="font-inter text-[10px] text-warm-gray ml-1">({product.reviewCount})</span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3
            id={product.titleId}
            className="font-cormorant text-base uppercase tracking-widest text-obsidian hover:text-gold transition-colors leading-tight"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="sr-only">{product.shortDescription}</p>
        <p className="font-inter text-sm font-medium text-charcoal">${product.price}</p>
      </div>
    </div>
  );
}
