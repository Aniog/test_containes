import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function ProductCard({ product, showRating = false }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    console.log('[ProductCard] Added to cart:', product.name);
  };

  return (
    <article
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        {/* Image container */}
        <div className="relative overflow-hidden bg-cream aspect-[3/4] mb-4">
          {/* Primary image */}
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
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
            data-strk-img-id={product.img2Id}
            data-strk-img={`[${product.titleId}] ${product.img2Query}`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          />

          {/* Tags */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.tags?.includes('new') && (
              <span className="bg-ivory text-obsidian font-inter text-[9px] tracking-[0.15em] uppercase px-2 py-1">
                New
              </span>
            )}
            {product.tags?.includes('bestseller') && (
              <span className="bg-gold text-obsidian font-inter text-[9px] tracking-[0.15em] uppercase px-2 py-1">
                Bestseller
              </span>
            )}
          </div>

          {/* Quick add button */}
          <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}>
            <button
              onClick={handleAddToCart}
              className="w-full bg-obsidian/90 text-ivory font-inter text-[10px] tracking-[0.15em] uppercase py-3 flex items-center justify-center gap-2 hover:bg-obsidian transition-colors duration-200"
            >
              <ShoppingBag size={12} strokeWidth={1.5} />
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product info */}
        <div className="px-1">
          <h3
            id={product.titleId}
            className="font-cormorant text-base uppercase tracking-[0.12em] text-obsidian mb-1 leading-tight"
          >
            {product.name}
          </h3>
          <p id={product.descId} className="sr-only">{product.shortDescription}</p>

          {showRating && (
            <div className="flex items-center gap-1 mb-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={10}
                  className={i < Math.round(product.rating) ? 'fill-gold text-gold' : 'text-parchment fill-parchment'}
                />
              ))}
              <span className="font-inter text-[10px] text-stone ml-1">({product.reviewCount})</span>
            </div>
          )}

          <p className="font-inter text-sm font-medium text-obsidian">{formatPrice(product.price)}</p>
        </div>
      </Link>
    </article>
  );
}
