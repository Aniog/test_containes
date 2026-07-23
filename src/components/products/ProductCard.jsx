import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative overflow-hidden bg-ivory aspect-[3/4] mb-4">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        {/* Hover image */}
        <img
          data-strk-img-id={product.hoverImgId}
          data-strk-img={`[${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={`${product.name} alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags?.includes('bestseller') && (
            <span className="font-inter text-[9px] uppercase tracking-widest bg-charcoal text-cream px-2 py-1">
              Bestseller
            </span>
          )}
          {product.tags?.includes('new') && (
            <span className="font-inter text-[9px] uppercase tracking-widest bg-gold text-white px-2 py-1">
              New
            </span>
          )}
          {product.tags?.includes('gift') && (
            <span className="font-inter text-[9px] uppercase tracking-widest bg-ivory text-charcoal border border-border px-2 py-1">
              Gift
            </span>
          )}
        </div>

        {/* Quick add button */}
        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
          hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
          <button
            onClick={handleAddToCart}
            className={`w-full py-3 font-inter text-xs uppercase tracking-widest transition-colors duration-200 ${
              added
                ? 'bg-gold text-white'
                : 'bg-charcoal text-cream hover:bg-gold'
            }`}
          >
            {added ? 'Added ✓' : 'Quick Add'}
          </button>
        </div>
      </div>

      {/* Product info */}
      <div>
        <span id={product.titleId} className="font-cormorant text-sm uppercase tracking-widest text-charcoal block mb-1">
          {product.name}
        </span>
        <span id={product.descId} className="font-inter text-xs text-warm-gray block mb-2">
          {product.shortDesc}
        </span>
        <div className="flex items-center justify-between">
          <span className="font-inter text-sm text-charcoal">${product.price}</span>
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={10}
                  className={i < Math.round(product.rating) ? 'text-gold fill-gold' : 'text-light-gray'}
                />
              ))}
            </div>
            <span className="font-inter text-[10px] text-light-gray">({product.reviewCount})</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
