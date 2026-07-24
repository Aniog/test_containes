import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group relative flex flex-col">
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-parchment aspect-[3/4]">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Hover image */}
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} worn`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.tags.includes('bestseller') && (
            <span className="bg-champagne text-obsidian text-[9px] tracking-widest uppercase px-2 py-0.5 font-sans font-semibold">
              Bestseller
            </span>
          )}
          {product.tags.includes('new') && (
            <span className="bg-obsidian text-ivory text-[9px] tracking-widest uppercase px-2 py-0.5 font-sans">
              New
            </span>
          )}
          {product.tags.includes('gift') && (
            <span className="bg-blush text-obsidian text-[9px] tracking-widest uppercase px-2 py-0.5 font-sans">
              Gift
            </span>
          )}
        </div>

        {/* Quick add */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="w-full bg-obsidian/90 backdrop-blur-sm text-ivory font-sans text-[10px] tracking-widest uppercase py-3 flex items-center justify-center gap-2 hover:bg-obsidian transition-colors"
          >
            <ShoppingBag size={13} />
            Quick Add
          </button>
        </div>
      </Link>

      <div className="pt-4 flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map(i => (
              <Star
                key={i}
                size={11}
                className={i <= Math.round(product.rating) ? 'fill-champagne text-champagne' : 'text-parchment-dark'}
              />
            ))}
          </div>
          <span className="text-[10px] text-warm-gray font-sans">({product.reviewCount})</span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3
            id={product.titleId}
            className="font-serif text-sm tracking-wider uppercase text-obsidian hover:text-champagne transition-colors leading-snug mt-1"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="text-xs text-warm-gray font-sans hidden">
          {product.shortDescription}
        </p>
        <p className="font-serif text-base text-obsidian mt-1">{formatPrice(product.price)}</p>
      </div>
    </div>
  );
}
