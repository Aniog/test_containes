import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import StarRating from './StarRating';

export default function ProductCard({ product, index = 0 }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold', 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-base/5 overflow-hidden mb-4">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          data-strk-img-id={`product-card-${product.id}`}
          data-strk-img={`[product-name-${product.id}] [product-desc-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
        />
        {/* Quick add button */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-4 left-4 right-4 py-3 bg-white/95 text-base text-xs uppercase tracking-[0.12em] font-medium flex items-center justify-center gap-2 hover:bg-base hover:text-white transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
          style={{ transitionProperty: 'opacity, transform, background-color, color' }}
        >
          <ShoppingBag className="w-4 h-4" />
          Quick Add
        </button>
      </div>
      <h3
        id={`product-name-${product.id}`}
        className="font-serif text-xs md:text-sm uppercase tracking-[0.2em] font-light text-base"
      >
        {product.name}
      </h3>
      <p
        id={`product-desc-${product.id}`}
        className="text-xs text-muted mt-1 line-clamp-1"
      >
        {product.description}
      </p>
      <div className="flex items-center gap-2 mt-2">
        <StarRating rating={product.rating} size={12} />
        <span className="text-xs text-muted">({product.reviewCount})</span>
      </div>
      <p className="text-sm font-medium mt-1.5">${product.price}</p>
    </Link>
  );
}
