import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={10}
          strokeWidth={1}
          style={s <= Math.round(rating) ? { color: '#C9A96E', fill: '#C9A96E' } : { color: '#E8E3DA', fill: '#E8E3DA' }}
        />
      ))}
    </div>
  );
}

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group flex flex-col">
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-linen aspect-[3/4]">
        {/* Warm editorial placeholder — swappable with real product images */}
        <div
          className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
          style={{
            background: 'linear-gradient(135deg, #EDE8DF 0%, #DDD5C8 50%, #C9B99A 100%)',
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <span className="font-serif text-2xl font-light text-mist/50 uppercase tracking-[0.2em]">
              {product.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
            </span>
          </div>
        </div>
        {/* Hover state — slightly different warm tone */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: 'linear-gradient(135deg, #E8E0D4 0%, #D4C9B8 50%, #BFA882 100%)',
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-serif text-xs uppercase tracking-[0.2em] text-mist/60">
              {product.shortDescription}
            </span>
          </div>
        </div>

        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.tags.includes('new') && (
            <span className="font-sans text-[10px] uppercase tracking-[0.15em] bg-obsidian text-parchment px-2 py-0.5">
              New
            </span>
          )}
          {product.tags.includes('bestseller') && (
            <span className="font-sans text-[10px] uppercase tracking-[0.15em] bg-gold text-white px-2 py-0.5">
              Bestseller
            </span>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product, product.variants[0]);
            }}
            className="w-full bg-obsidian/90 text-parchment font-sans text-[11px] uppercase tracking-[0.15em] py-3 flex items-center justify-center gap-2 hover:bg-obsidian transition-colors"
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </Link>

      <div className="pt-4 flex flex-col gap-1.5">
        <div className="flex items-center gap-1.5">
          <StarRating rating={product.rating} />
          <span className="font-sans text-[11px] text-whisper">({product.reviewCount})</span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3
            id={product.titleId}
            className="font-serif text-sm uppercase tracking-[0.12em] text-ink hover:text-gold transition-colors leading-snug"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="font-sans text-xs text-mist leading-relaxed">
          {product.shortDescription}
        </p>
        <p className="font-sans text-sm font-medium text-ink mt-0.5">${product.price}</p>
      </div>
    </div>
  );
}
