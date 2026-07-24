import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import StarRating from './StarRating';

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold', 1);
  };

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-canvas">
          <img
            data-strk-img-id={`product-${product.id}-main`}
            data-strk-img={`[product-${product.id}-name]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Hover overlay with quick add */}
          <div
            className={`absolute inset-x-0 bottom-0 flex justify-center pb-4 transition-all duration-300 ${
              hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <button
              onClick={handleAdd}
              className="flex items-center gap-2 bg-surface/95 px-5 py-2.5 text-xs font-medium uppercase tracking-widest text-base shadow-sm hover:bg-accent hover:text-white transition-colors"
            >
              <ShoppingBag size={14} />
              Add to Cart
            </button>
          </div>
        </div>
        <div className="mt-4 text-center">
          <h3
            id={`product-${product.id}-name`}
            className="font-serif text-sm uppercase tracking-widest text-base"
          >
            {product.name}
          </h3>
          <div className="mt-1.5 flex items-center justify-center gap-2">
            <StarRating rating={product.rating} size={12} />
            <span className="text-xs text-muted">({product.reviews})</span>
          </div>
          <p className="mt-1.5 font-sans text-sm font-medium text-base">
            ${product.price}
          </p>
        </div>
      </Link>
    </div>
  );
}
