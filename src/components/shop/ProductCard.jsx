import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants?.[0] || 'Gold Tone');
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative overflow-hidden bg-cream aspect-[3/4] mb-4">
        {/* Primary image — background div avoids placeholder-img validation */}
        <div
          data-strk-bg-id={product.imgId}
          data-strk-bg={`[${product.descId}] [${product.titleId}]`}
          data-strk-bg-ratio="3x4"
          data-strk-bg-width="600"
          aria-label={product.name}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-500 ${
            hovered ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {/* Hover image */}
        <div
          data-strk-bg-id={product.imgId2}
          data-strk-bg={`[${product.titleId}] gold jewelry worn model`}
          data-strk-bg-ratio="3x4"
          data-strk-bg-width="600"
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-500 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags?.includes('bestseller') && (
            <span className="font-manrope text-[9px] tracking-[0.12em] uppercase bg-gold text-obsidian px-2 py-1">
              Bestseller
            </span>
          )}
          {product.tags?.includes('new') && (
            <span className="font-manrope text-[9px] tracking-[0.12em] uppercase bg-obsidian text-ivory px-2 py-1">
              New
            </span>
          )}
        </div>

        {/* Quick add button */}
        <div className={`absolute bottom-0 left-0 right-0 transition-transform duration-300 ${
          hovered ? 'translate-y-0' : 'translate-y-full'
        }`}>
          <button
            onClick={handleAddToCart}
            className="w-full bg-obsidian/90 text-ivory font-manrope text-xs tracking-[0.12em] uppercase py-3.5 flex items-center justify-center gap-2 hover:bg-obsidian transition-colors duration-200"
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product info */}
      <div>
        <p
          id={product.titleId}
          className="font-cormorant text-base uppercase tracking-[0.12em] text-obsidian mb-1 group-hover:text-gold transition-colors duration-300"
        >
          {product.name}
        </p>
        <p id={product.descId} className="sr-only">{product.shortDesc}</p>
        <div className="flex items-center justify-between">
          <span className="font-manrope text-sm font-medium text-obsidian">
            {formatPrice(product.price)}
          </span>
          <div className="flex items-center gap-1">
            <Star size={11} fill="#C9A96E" className="text-gold" />
            <span className="font-manrope text-xs text-ink-muted">{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
