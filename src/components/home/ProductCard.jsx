import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { StarRating } from '@/components/ui/StarRating';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [imgIdx, setImgIdx] = useState(0);
  const { addToCart } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.variants[0], 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => { setHovered(true); setImgIdx(1); }}
      onMouseLeave={() => { setHovered(false); setImgIdx(0); }}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-vel-light overflow-hidden rounded-sm mb-4">
        {/* Placeholder gradient representing jewelry */}
        <div
          className={`absolute inset-0 transition-all duration-700 ${
            imgIdx === 0
              ? 'bg-gradient-to-br from-vel-deep/80 via-vel-deep/40 to-vel-gold/30'
              : 'bg-gradient-to-br from-vel-deep/70 via-vel-deep/50 to-vel-gold/40'
          }`}
        />
        {/* Decorative jewelry silhouette */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          {product.category === 'Earrings' && (
            <svg viewBox="0 0 80 120" className="w-16 md:w-20 text-vel-gold/30">
              <ellipse cx="40" cy="30" rx="20" ry="25" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="40" cy="40" r="4" fill="currentColor" />
              <line x1="40" y1="55" x2="40" y2="70" stroke="currentColor" strokeWidth="0.5" />
            </svg>
          )}
          {product.category === 'Necklaces' && (
            <svg viewBox="0 0 100 120" className="w-20 md:w-24 text-vel-gold/30">
              <path d="M50 10 Q30 50 50 90 Q70 50 50 10" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="50" cy="85" r="6" fill="currentColor" />
            </svg>
          )}
          {product.category === 'Huggies' && (
            <svg viewBox="0 0 80 80" className="w-16 md:w-20 text-vel-gold/30">
              <circle cx="40" cy="40" r="28" fill="none" stroke="currentColor" strokeWidth="4" />
              <circle cx="40" cy="40" r="18" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          )}
          {product.category === 'Sets' && (
            <svg viewBox="0 0 100 120" className="w-20 md:w-24 text-vel-gold/30">
              <ellipse cx="30" cy="30" rx="15" ry="20" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="30" cy="45" r="3" fill="currentColor" />
              <ellipse cx="70" cy="30" rx="15" ry="20" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="70" cy="45" r="3" fill="currentColor" />
              <path d="M50 50 Q35 80 50 95 Q65 80 50 50" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          )}
        </div>

        {/* Quick add button */}
        <button
          onClick={handleAdd}
          className={`absolute bottom-3 right-3 w-9 h-9 rounded-full bg-vel-surface shadow-lg flex items-center justify-center text-vel-deep hover:bg-vel-gold hover:text-white transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
          aria-label={`Add ${product.name} to cart`}
        >
          <Plus className="w-4 h-4" />
        </button>

        {/* Tags */}
        {product.tags.includes('bestseller') && (
          <span className="absolute top-3 left-3 bg-vel-deep/80 text-white text-[10px] tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm">
            Bestseller
          </span>
        )}
      </div>

      {/* Info */}
      <div className="px-0.5">
        <h3 className="font-serif text-xs md:text-sm tracking-[0.15em] uppercase text-vel-deep mb-1.5">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mb-1.5">
          <StarRating rating={product.rating} />
          <span className="text-xs text-vel-muted">({product.reviewCount})</span>
        </div>
        <p className="text-sm font-medium text-vel-deep">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}
