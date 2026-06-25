import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const SVG_PLACEHOLDER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <article className="group relative flex flex-col">
      {/* Image container */}
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-warm-mist aspect-[3/4]">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src={SVG_PLACEHOLDER}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Secondary image (hover) */}
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src={SVG_PLACEHOLDER}
          alt={`${product.name} alternate view`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags.includes('new') && (
            <span className="bg-charcoal text-ivory font-inter text-[9px] uppercase tracking-widest px-2 py-1">
              New
            </span>
          )}
          {product.tags.includes('bestseller') && (
            <span className="bg-gold text-ivory font-inter text-[9px] uppercase tracking-widest px-2 py-1">
              Bestseller
            </span>
          )}
          {product.tags.includes('gift') && (
            <span className="bg-warm-mist text-bark font-inter text-[9px] uppercase tracking-widest px-2 py-1 border border-stone">
              Gift
            </span>
          )}
        </div>

        {/* Quick add button */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="w-full bg-charcoal/90 backdrop-blur-sm text-ivory font-inter text-[10px] uppercase tracking-widest py-3.5 flex items-center justify-center gap-2 hover:bg-charcoal transition-colors"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="pt-4 flex flex-col gap-1">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={9}
              className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-stone fill-stone'}
            />
          ))}
          <span className="font-inter text-[10px] text-bark ml-1">({product.reviewCount})</span>
        </div>

        <Link to={`/product/${product.slug}`}>
          <h3
            id={product.titleId}
            className="font-cormorant text-base font-medium uppercase tracking-[0.12em] text-charcoal hover:text-gold transition-colors leading-tight"
          >
            {product.name}
          </h3>
        </Link>

        <p id={product.descId} className="font-inter text-[10px] text-bark leading-relaxed line-clamp-2 hidden">
          {product.shortDescription}
        </p>

        <p className="font-inter text-sm font-medium text-ink mt-0.5">${product.price}</p>
      </div>
    </article>
  );
}
