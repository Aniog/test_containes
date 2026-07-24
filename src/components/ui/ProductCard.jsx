import { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import StarRating from './StarRating';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.variants[0], 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-brand-surface mb-4">
        <img
          src={hovered ? product.hoverImage : product.image}
          alt={product.name}
          className="w-full h-full object-cover img-zoom"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* Fallback placeholder if image fails or loads empty */}
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <div className="w-16 h-16 rounded-full border border-brand-gold/20" />
        </div>
        <button
          onClick={handleQuickAdd}
          className="absolute bottom-4 left-4 right-4 py-3 bg-brand-gold text-brand-base text-sm font-medium uppercase tracking-wider opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <ShoppingBag size={16} />
          Quick Add
        </button>
      </div>
      <div className="space-y-1">
        <h3 className="font-serif text-sm uppercase tracking-widest text-brand-cream group-hover:text-brand-gold transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-brand-muted">{product.tagline}</p>
        <div className="flex items-center gap-2 pt-1">
          <span className="text-sm font-medium text-brand-cream">
            ${product.price}
          </span>
          <div className="flex items-center gap-1">
            <StarRating rating={product.rating} size={10} />
            <span className="text-[10px] text-brand-muted">
              ({product.reviews})
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}