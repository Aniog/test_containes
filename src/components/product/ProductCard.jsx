import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0].name, 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-charcoal-50 overflow-hidden mb-4">
        {/* Primary image */}
        <img
          data-strk-img-id={`card-${product.id}-1`}
          data-strk-img={`[${product.id}-name] [${product.id}-desc] jewelry gold elegant`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
          id={`card-${product.id}-name`}
        />
        {/* Hover image */}
        <img
          data-strk-img-id={`card-${product.id}-2`}
          data-strk-img={`[${product.id}-hover] jewelry worn model portrait gold`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} - worn`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          id={`${product.id}-hover`}
        />

        {/* Quick add button */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-400 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={handleQuickAdd}
            className="w-full flex items-center justify-center gap-2 py-3 bg-charcoal-900/90 backdrop-blur-sm text-cream-50 text-xs font-medium tracking-ultra-wide uppercase hover:bg-charcoal-900 transition-colors"
          >
            <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>

        {/* Sale badge */}
        {product.originalPrice && (
          <div className="absolute top-3 left-3 px-2.5 py-1 bg-rose-500 text-cream-50 text-[10px] font-semibold tracking-ultra-wide uppercase">
            Sale
          </div>
        )}
      </div>

      {/* Product info */}
      <div className="space-y-1.5">
        <h3 className="product-name text-sm md:text-base">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.round(product.rating) ? 'fill-gold-400 text-gold-400' : 'text-charcoal-200'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-charcoal-400">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="font-sans text-base font-medium text-charcoal-900">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="font-sans text-sm text-charcoal-400 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
