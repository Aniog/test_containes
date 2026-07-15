import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.variants[0]);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[var(--velmora-bg-secondary)] mb-4">
        <img
          data-strk-img-id={`card-${product.id}-primary`}
          data-strk-img={`[${product.id}-name] [${product.id}-description] gold jewelry elegant`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
        />
        <img
          data-strk-img-id={`card-${product.id}-hover`}
          data-strk-img={`[${product.id}-name] gold jewelry detail closeup`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        />
        {/* Quick add button */}
        <div className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button
            onClick={handleQuickAdd}
            className="w-full py-3 bg-white/95 backdrop-blur-sm text-[var(--velmora-dark)] text-xs tracking-[0.15em] uppercase font-medium flex items-center justify-center gap-2 hover:bg-[var(--velmora-dark)] hover:text-white transition-colors"
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-1">
          <Star size={12} className="fill-[var(--velmora-star)] text-[var(--velmora-star)]" />
          <span className="text-xs text-[var(--velmora-text-muted)]">{product.rating} ({product.reviews})</span>
        </div>
        <h3 className="product-name">{product.name}</h3>
        <p className="text-sm font-medium">${product.price}</p>
      </div>
    </Link>
  );
}
