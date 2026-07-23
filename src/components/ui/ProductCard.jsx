import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import StarRating from './StarRating';

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    addItem(product, product.variants?.[0]);
  };

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate(`/products/${product.id}`)}
    >
      <div className="relative aspect-[3/4] bg-surface-alt overflow-hidden border border-hairline">
        <img
          data-strk-img-id={`product-${product.id}-main`}
          data-strk-img={`[product-${product.id}-name]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            hovered ? 'scale-105' : 'scale-100'
          }`}
        />
        {hovered && (
          <button
            onClick={handleAdd}
            className="absolute bottom-4 left-4 right-4 bg-surface text-text-primary py-3 px-4 flex items-center justify-center gap-2 uppercase text-xs font-sans font-medium tracking-label hover:bg-accent hover:text-white transition-colors duration-200"
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        )}
      </div>
      <div className="mt-4">
        <h3
          id={`product-${product.id}-name`}
          className="font-serif text-sm uppercase tracking-widest text-text-primary font-medium"
        >
          {product.name}
        </h3>
        <div className="mt-1.5 flex items-center gap-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-xs text-text-secondary">
            ({product.reviewCount})
          </span>
        </div>
        <p className="mt-1.5 font-sans text-sm text-text-primary font-medium">
          ${product.price}
        </p>
      </div>
    </div>
  );
}
