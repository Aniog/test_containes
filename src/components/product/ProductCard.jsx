import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useState } from 'react';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const defaultVariant = product.variants[0];

  return (
    <div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-warm-100 overflow-hidden rounded-sm">
          {/* Primary image */}
          <img
            data-strk-img-id={`card-${product.imgId}`}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
            }`}
          />
          {/* Secondary hover image - slightly different query for variety */}
          <img
            data-strk-img-id={`card-hover-${product.imgId}`}
            data-strk-img={`[${product.titleId}] gold jewelry detail`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          />

          {/* Quick add button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(product, defaultVariant, 1);
            }}
            className={`absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm text-foreground py-2.5 text-[10px] tracking-[0.1em] uppercase font-medium flex items-center justify-center gap-1.5 hover:bg-accent hover:text-white transition-all duration-500 ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
            }`}
          >
            <Plus className="w-3 h-3" />
            Add to Cart
          </button>

          {/* Invisible text for image search */}
          <span id={product.titleId} className="hidden">{product.name}</span>
          <span id={product.descId} className="hidden">{product.description}</span>
        </div>
      </Link>

      <div className="mt-3 text-center">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="text-[11px] tracking-[0.1em] uppercase font-medium text-foreground hover:text-accent transition-colors">
            {product.name}
          </h3>
          <p className="text-xs text-muted-foreground mt-1">${product.price}</p>
        </Link>
      </div>
    </div>
  );
}
