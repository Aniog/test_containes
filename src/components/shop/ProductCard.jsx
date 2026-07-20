import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold', 1);
    console.log('[ProductCard] Added to cart:', product.id);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative overflow-hidden bg-parchment aspect-[3/4]">
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
          data-strk-img={`[${product.titleId}] [${product.descId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
        />

        {/* Quick add button */}
        <div
          className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full bg-ink/90 text-parchment py-3 text-[11px] tracking-widest uppercase font-sans hover:bg-gold hover:text-ink transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="pt-4 pb-2">
        <p
          id={product.titleId}
          className="font-serif text-sm tracking-[0.12em] uppercase text-charcoal leading-tight"
        >
          {product.name}
        </p>
        <p
          id={product.descId}
          className="text-xs text-warm-gray font-sans mt-1"
        >
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm font-medium text-charcoal font-sans">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3" style={{ fill: '#C9A96E', color: '#C9A96E' }} />
            <span className="text-xs text-warm-gray font-sans">{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
