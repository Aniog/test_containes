import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag, Heart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, showQuickAdd = true }) {
  const [hovered, setHovered] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
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
      <div className="relative overflow-hidden bg-ivory aspect-[3/4]">
        {/* Main image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        {/* Hover image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate view`}
          data-strk-img-id={product.img2Id}
          data-strk-img={`[${product.titleId}] gold jewelry worn model close up`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-gold text-cream font-sans text-[10px] tracking-widest uppercase px-2.5 py-1">
            {product.badge}
          </span>
        )}

        {/* Wishlist */}
        <button
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setWishlisted(v => !v); }}
          aria-label="Add to wishlist"
          className={`absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-cream/80 backdrop-blur-sm transition-all duration-300 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Heart
            size={14}
            strokeWidth={1.5}
            className={wishlisted ? 'fill-gold text-gold' : 'text-velvet'}
          />
        </button>

        {/* Quick add */}
        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            className={`absolute bottom-0 left-0 right-0 bg-velvet/90 text-cream font-sans text-[11px] tracking-widest uppercase py-3 flex items-center justify-center gap-2 transition-all duration-300 hover:bg-gold ${
              hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            Add to Cart
          </button>
        )}
      </div>

      {/* Info */}
      <div className="pt-4 pb-2">
        {/* Hidden text for image queries */}
        <p id={product.titleId} className="font-serif text-sm tracking-widest2 uppercase text-velvet leading-tight group-hover:text-gold transition-colors duration-300">
          {product.name}
        </p>
        <p id={product.descId} className="sr-only">{product.shortDescription}</p>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={10}
                className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-mist'}
                strokeWidth={0}
              />
            ))}
            <span className="font-sans text-[11px] text-stone ml-1">({product.reviewCount})</span>
          </div>
          <div className="flex items-center gap-2">
            {product.originalPrice && (
              <span className="font-sans text-xs text-stone line-through">${product.originalPrice}</span>
            )}
            <span className="font-sans text-sm font-medium text-velvet">${product.price}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
