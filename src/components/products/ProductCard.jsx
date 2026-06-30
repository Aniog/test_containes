import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-warm-200 aspect-square">
        <img
          src={product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 ${
            hovered && product.images[1] ? 'opacity-0' : 'opacity-100 group-hover:scale-105'
          }`}
          loading="lazy"
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} - alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
          />
        )}

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 text-[10px] font-medium tracking-ultrawide uppercase text-white bg-charcoal-800 px-3 py-1.5">
            {product.badge}
          </span>
        )}

        {/* Quick Add overlay */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product);
            }}
            className="w-full flex items-center justify-center gap-2 py-3 bg-white/95 backdrop-blur-sm text-charcoal-800 text-xs font-medium tracking-wider uppercase hover:bg-white transition-colors border-none cursor-pointer"
          >
            <ShoppingBag size={14} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="pt-4 text-center">
        <Link
          to={`/product/${product.id}`}
          className="block font-serif text-[13px] font-semibold tracking-megawide uppercase text-charcoal-800 hover:text-brand transition-colors"
          style={{ textDecoration: 'none' }}
        >
          {product.name}
        </Link>
        <p className="text-sm text-charcoal-500 mt-1">${product.price}</p>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center justify-center gap-1 mt-1.5">
            <Star size={12} fill="#C9A84C" className="text-brand" />
            <span className="text-xs text-charcoal-400">
              {product.rating} ({product.reviewCount})
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
