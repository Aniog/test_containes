import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function ProductCard({ product, containerRef }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
  };

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-cream-deep overflow-hidden mb-4">
          {/* Primary image */}
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
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
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          />

          {/* Quick add button */}
          <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}>
            <button
              onClick={handleAddToCart}
              className="w-full bg-obsidian/90 backdrop-blur-sm text-cream py-3.5 font-sans text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-obsidian transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Quick Add
            </button>
          </div>

          {/* Bestseller badge */}
          {product.tags.includes('bestseller') && (
            <div className="absolute top-3 left-3">
              <span className="bg-gold text-obsidian font-sans text-[9px] font-bold tracking-widest uppercase px-2 py-1">
                Bestseller
              </span>
            </div>
          )}
        </div>

        {/* Product info */}
        <div className="space-y-1.5">
          <p
            id={product.titleId}
            className="product-name text-xs text-obsidian group-hover:text-gold-muted transition-colors"
          >
            {product.name}
          </p>
          <p
            id={product.descId}
            className="font-sans text-xs text-obsidian-400 leading-relaxed line-clamp-1"
          >
            {product.shortDescription}
          </p>
          <div className="flex items-center justify-between pt-1">
            <span className="font-serif text-base text-obsidian font-medium">
              {formatPrice(product.price)}
            </span>
            <div className="flex items-center gap-1">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-2.5 h-2.5 ${
                      i < Math.floor(product.rating)
                        ? 'text-gold fill-gold'
                        : 'text-obsidian-200'
                    }`}
                  />
                ))}
              </div>
              <span className="font-sans text-[10px] text-obsidian-400">({product.reviewCount})</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
