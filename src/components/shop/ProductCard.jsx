import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative overflow-hidden bg-velmora-blush aspect-[3/4] mb-4">
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        {/* Hover image */}
        <img
          alt={`${product.name} alternate view`}
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry close up worn`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags?.includes('bestseller') && (
            <span className="bg-velmora-gold text-velmora-obsidian text-[9px] font-semibold tracking-[0.15em] uppercase px-2 py-1">
              Bestseller
            </span>
          )}
          {product.tags?.includes('new') && (
            <span className="bg-velmora-obsidian text-velmora-cream text-[9px] font-semibold tracking-[0.15em] uppercase px-2 py-1">
              New
            </span>
          )}
        </div>

        {/* Quick add button */}
        <div
          className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full bg-velmora-obsidian/90 text-velmora-cream py-3 text-[11px] font-medium tracking-[0.15em] uppercase flex items-center justify-center gap-2 hover:bg-velmora-obsidian transition-colors duration-200"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Quick Add
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="space-y-1.5">
        {/* Hidden text for image queries */}
        <span id={product.titleId} className="sr-only">{product.name}</span>
        <span id={product.descId} className="sr-only">{product.shortDescription}</span>

        <h3
          className="text-sm font-medium tracking-[0.12em] uppercase text-velmora-text group-hover:text-velmora-gold-dark transition-colors duration-200"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          {product.name}
        </h3>

        <div className="flex items-center gap-1.5">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-2.5 h-2.5 ${
                  i < Math.floor(product.rating)
                    ? 'fill-velmora-gold text-velmora-gold'
                    : 'text-velmora-gold/30'
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] text-velmora-muted">({product.reviewCount})</span>
        </div>

        <p className="text-sm font-medium text-velmora-text">${product.price}</p>
      </div>
    </Link>
  );
}
