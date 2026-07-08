import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, imgRef }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-linen aspect-[3/4]">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        {/* Hover image */}
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} worn`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags?.includes('bestseller') && (
            <span className="font-manrope text-[9px] uppercase tracking-widest bg-gold text-obsidian px-2 py-0.5">
              Bestseller
            </span>
          )}
          {product.tags?.includes('new') && (
            <span className="font-manrope text-[9px] uppercase tracking-widest bg-obsidian text-ivory px-2 py-0.5">
              New
            </span>
          )}
          {product.tags?.includes('gift') && (
            <span className="font-manrope text-[9px] uppercase tracking-widest bg-charcoal text-ivory px-2 py-0.5">
              Gift
            </span>
          )}
        </div>

        {/* Quick add overlay */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-obsidian/90 py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <ShoppingBag size={13} strokeWidth={1.5} className="text-gold" />
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="font-manrope text-[10px] uppercase tracking-widest text-ivory hover:text-gold transition-colors"
          >
            Quick Add
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="pt-4 pb-2">
        {/* Hidden text for image queries */}
        <p id={product.titleId} className="font-cormorant text-sm uppercase tracking-widest text-obsidian leading-tight mb-1">
          {product.name}
        </p>
        <p id={product.descId} className="sr-only">{product.shortDescription}</p>

        <div className="flex items-center justify-between mt-1">
          <span className="font-manrope text-sm font-medium text-obsidian">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star size={10} fill="#C9A96E" stroke="none" />
            <span className="font-manrope text-[10px] text-mist">{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
