import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'Gold Tone', 1);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative overflow-hidden bg-linen aspect-[3/4] mb-4">
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
          data-strk-img-id={product.img2Id}
          data-strk-img={`[${product.titleId}] gold jewelry worn editorial`}
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
          {product.tags.includes('bestseller') && (
            <span className="bg-obsidian text-ivory font-manrope text-[9px] uppercase tracking-[0.1em] px-2 py-1">
              Bestseller
            </span>
          )}
          {product.tags.includes('new') && (
            <span className="bg-gold text-obsidian font-manrope text-[9px] uppercase tracking-[0.1em] px-2 py-1">
              New
            </span>
          )}
          {product.tags.includes('gift') && (
            <span className="bg-mink text-ivory font-manrope text-[9px] uppercase tracking-[0.1em] px-2 py-1">
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
            className="w-full bg-obsidian/90 backdrop-blur-sm text-ivory font-manrope text-[10px] uppercase tracking-[0.14em] py-3.5 flex items-center justify-center gap-2 hover:bg-obsidian transition-colors"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </div>

      {/* Product info */}
      <div>
        <p className="font-manrope text-[10px] uppercase tracking-[0.1em] text-dust mb-1">
          {product.categoryLabel}
        </p>
        <h3
          id={product.titleId}
          className="font-cormorant text-base uppercase tracking-[0.12em] text-obsidian font-medium mb-1 group-hover:text-gold-dark transition-colors"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">{product.shortDescription}</p>

        <div className="flex items-center justify-between">
          <span className="font-manrope text-sm font-medium text-obsidian">
            ${product.price}
          </span>
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={10}
                  className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-divider fill-divider'}
                />
              ))}
            </div>
            <span className="font-manrope text-[10px] text-dust">({product.reviewCount})</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
