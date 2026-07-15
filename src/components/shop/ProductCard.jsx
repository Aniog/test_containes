import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-cream aspect-[3/4]">
        {/* Primary image */}
        <img
          id={product.imgId}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
        />
        {/* Hover image */}
        <img
          id={product.img2Id}
          data-strk-img-id={product.img2Id}
          data-strk-img={`[${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} worn`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        />

        {/* Quick add overlay */}
        <div className={`absolute bottom-0 left-0 right-0 bg-espresso/90 py-3 px-4 flex items-center justify-center gap-2 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <ShoppingBag size={13} strokeWidth={1.5} className="text-ivory" />
          <button
            onClick={(e) => { e.preventDefault(); addItem(product); }}
            className="font-inter text-[10px] uppercase tracking-[0.16em] text-ivory"
          >
            Quick Add
          </button>
        </div>

        {/* Bestseller badge */}
        {product.tags?.includes('bestseller') && (
          <div className="absolute top-3 left-3 bg-gold text-espresso font-inter text-[9px] uppercase tracking-[0.12em] px-2.5 py-1">
            Bestseller
          </div>
        )}
      </Link>

      {/* Product info */}
      <div className="pt-4 pb-2">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3
              id={product.titleId}
              className="font-cormorant text-sm uppercase tracking-[0.12em] text-espresso leading-tight truncate"
            >
              {product.name}
            </h3>
            <p id={product.descId} className="sr-only">{product.shortDesc}</p>
          </div>
          <span className="font-inter text-sm font-medium text-espresso flex-shrink-0">${product.price}</span>
        </div>
        <div className="flex items-center gap-1 mt-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={10}
              className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-divider'}
              strokeWidth={1}
            />
          ))}
          <span className="font-inter text-[10px] text-taupe ml-1">({product.reviewCount})</span>
        </div>
      </div>
    </div>
  );
}
