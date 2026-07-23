import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCart } from '@/context/CartContext.jsx';
import { formatPrice } from '@/data/products.js';
import { StrkImg } from '@/components/StrkImage.jsx';

export function Stars({ rating, className = 'h-3.5 w-3.5' }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${className} ${
            i < Math.round(rating) ? 'fill-bronze text-bronze' : 'fill-linen text-linen'
          }`}
          strokeWidth={1}
        />
      ))}
    </div>
  );
}

export default function ProductCard({ product, index = 0 }) {
  const { addItem } = useCart();
  const imgBase = product.id.replace(/-/g, '-');

  return (
    <div
      className="group animate-fade-up"
      style={{ animationDelay: `${(index % 5) * 0.08}s` }}
    >
      <div className="relative overflow-hidden bg-cream">
        <Link to={`/product/${product.id}`} aria-label={product.name}>
          <StrkImg
            imgId={`card-a-${imgBase}`}
            query={`elegant gold jewelry product photography, ${product.tagline}, on warm neutral linen background, soft studio light`}
            ratio="4x3"
            width={800}
            alt={product.name}
            className="aspect-[4/5] w-full object-cover transition-opacity duration-700 group-hover:opacity-0"
          />
          {/* Hover second image */}
          <StrkImg
            imgId={`card-b-${imgBase}`}
            query={`close-up of a woman wearing ${product.tagline}, gold jewelry on skin, warm editorial photography`}
            ratio="4x3"
            width={800}
            alt={`${product.name} worn`}
            className="absolute inset-0 aspect-[4/5] w-full scale-[1.03] object-cover opacity-0 transition-all duration-700 group-hover:scale-100 group-hover:opacity-100"
          />
        </Link>

        {product.compareAtPrice && (
          <span className="absolute left-3 top-3 bg-ivory/95 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-bronze-dark">
            Set Value
          </span>
        )}

        {/* Quick add */}
        <button
          onClick={() => addItem(product, 'Gold', 1)}
          className="absolute inset-x-0 bottom-0 translate-y-full bg-espresso/95 py-3.5 text-[11px] font-medium uppercase tracking-luxe text-ivory transition-all duration-400 hover:bg-bronze-dark group-hover:translate-y-0"
        >
          Add to Cart
        </button>
      </div>

      <div className="pt-4 text-center">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-[15px] uppercase tracking-[0.16em] text-espresso transition-colors duration-300 hover:text-bronze">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-xs text-mink">{product.tagline}</p>
        <div className="mt-2 flex items-center justify-center gap-2">
          <span className="text-sm font-medium text-espresso">{formatPrice(product.price)}</span>
          {product.compareAtPrice && (
            <span className="text-xs text-ash line-through">{formatPrice(product.compareAtPrice)}</span>
          )}
        </div>
      </div>
    </div>
  );
}
