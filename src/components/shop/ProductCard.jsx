import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product, containerRef }) {
  const { addItem } = useCart();

  return (
    <article className="group flex flex-col">
      {/* Image area */}
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-cream aspect-[3/4] mb-4">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:opacity-0"
        />
        {/* Hover image */}
        <img
          data-strk-img-id={product.img2Id}
          data-strk-img={`[${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} worn`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 group-hover:opacity-100"
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.tags.includes('bestseller') && (
            <span className="font-sans text-[9px] tracking-widest uppercase bg-champagne text-velvet px-2 py-0.5">
              Bestseller
            </span>
          )}
          {product.tags.includes('new') && (
            <span className="font-sans text-[9px] tracking-widest uppercase bg-velvet text-ivory px-2 py-0.5">
              New
            </span>
          )}
        </div>

        {/* Quick add */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={(e) => { e.preventDefault(); addItem(product); }}
            className="w-full bg-velvet text-ivory font-sans text-[10px] tracking-widest uppercase py-3 hover:bg-champagne hover:text-velvet transition-colors duration-200"
          >
            Add to Cart
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1 mb-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={10}
              fill={i < Math.floor(product.rating) ? '#C9A96E' : 'none'}
              className={i < Math.floor(product.rating) ? 'text-champagne' : 'text-blush'}
            />
          ))}
          <span className="font-sans text-[10px] text-stone ml-1">({product.reviewCount})</span>
        </div>

        <Link to={`/product/${product.slug}`}>
          <h3
            id={product.titleId}
            className="font-serif text-sm md:text-base tracking-wide uppercase text-velvet hover:text-champagne transition-colors leading-tight"
          >
            {product.name}
          </h3>
        </Link>

        <p id={product.descId} className="font-sans text-xs text-stone hidden">
          {product.shortDesc}
        </p>

        <p className="font-sans text-sm text-velvet font-500">${product.price}</p>
      </div>
    </article>
  );
}
