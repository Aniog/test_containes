import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold', 1);
    console.log('[ProductCard] Added to cart:', product.name);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative overflow-hidden bg-gold-muted/20 aspect-[3/4]">
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
          data-strk-img-id={product.img2Id}
          data-strk-img={`[${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={`${product.name} alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {/* Quick add button */}
        <div
          className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full bg-ink/90 backdrop-blur-sm text-warmwhite font-inter text-[10px] uppercase tracking-[0.14em] py-3.5 flex items-center justify-center gap-2 hover:bg-gold transition-colors duration-200"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>

        {/* Badge */}
        {product.reviewCount > 100 && (
          <div className="absolute top-3 left-3">
            <span className="bg-gold text-warmwhite font-inter text-[9px] uppercase tracking-[0.1em] px-2 py-1">
              Bestseller
            </span>
          </div>
        )}
      </div>

      {/* Product info */}
      <div className="pt-4 pb-2">
        <p
          id={product.titleId}
          className="font-cormorant text-sm uppercase tracking-[0.12em] text-ink leading-tight group-hover:text-gold transition-colors duration-200"
        >
          {product.name}
        </p>
        <p
          id={product.descId}
          className="font-inter text-[11px] text-stone-warm mt-1"
        >
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between mt-2">
          <span className="font-inter text-sm text-charcoal">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star size={10} fill="#B8935A" stroke="none" />
            <span className="font-inter text-[10px] text-stone-warm">{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
