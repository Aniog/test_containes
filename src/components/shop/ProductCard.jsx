import { Link } from 'react-router-dom';
import { Star, Plus } from 'lucide-react';
import { useCart } from '../../context/CartContext';

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={10}
          fill={s <= Math.round(rating) ? '#c9a96e' : 'none'}
          className={s <= Math.round(rating) ? 'text-champagne' : 'text-champagne-light'}
          strokeWidth={1}
        />
      ))}
    </div>
  );
}

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative overflow-hidden bg-parchment aspect-[3/4]">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover img-primary"
          />
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            data-strk-img-id={product.imgAltId}
            data-strk-img={`[${product.titleId}] gold jewelry worn model`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover img-secondary"
          />

          {product.badge && (
            <span className="absolute top-3 left-3 bg-obsidian text-ivory font-sans text-[9px] tracking-widest uppercase px-2 py-1">
              {product.badge}
            </span>
          )}

          <button
            onClick={(e) => { e.preventDefault(); addItem(product); }}
            className="absolute bottom-3 left-3 right-3 bg-ivory/90 backdrop-blur-sm text-obsidian font-sans text-[10px] tracking-widest uppercase py-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 hover:bg-ivory"
          >
            <Plus size={11} /> Add to Bag
          </button>
        </div>

        <div className="pt-3 pb-1">
          <p id={product.titleId} className="font-serif text-sm tracking-widest uppercase text-obsidian font-medium leading-tight">
            {product.name}
          </p>
          <p id={product.descId} className="font-sans text-xs text-stone-warm mt-0.5 leading-snug">
            {product.subtitle}
          </p>
          <div className="flex items-center justify-between mt-2">
            <StarRating rating={product.rating} />
            <span className="font-sans text-sm text-obsidian font-medium">${product.price}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
