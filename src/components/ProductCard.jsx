import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import StarRating from './StarRating';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const quickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-cream-200 overflow-hidden mb-3">
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out ${
            hovered ? 'scale-105' : 'scale-100'
          }`}
        />
        {/* Second image on hover */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-cream-50/90 backdrop-blur-sm text-charcoal-800 text-[10px] font-sans font-medium tracking-widest uppercase px-2.5 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <button
          onClick={quickAdd}
          className={`absolute bottom-3 left-3 right-3 bg-charcoal-900 text-cream-50 py-2.5 flex items-center justify-center gap-2 text-[11px] font-sans font-medium tracking-widest uppercase transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Quick Add
        </button>
      </div>

      <div className="space-y-1">
        <h3 className="font-serif text-sm tracking-widest uppercase text-charcoal-900">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[11px] text-charcoal-400">
            ({product.reviewCount})
          </span>
        </div>
        <p className="text-sm font-medium text-charcoal-700">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}
