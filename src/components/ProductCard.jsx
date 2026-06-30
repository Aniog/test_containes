import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import StarRating from './StarRating';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1, product.tone?.[0] || 'gold');
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-warm overflow-hidden mb-3">
        <img
          src={`https://placehold.co/600x800/d4b87a/1c1c1c?text=${encodeURIComponent(product.name)}`}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            hovered ? 'scale-105' : 'scale-100'
          }`}
        />
        {product.bestseller && (
          <span className="absolute top-3 left-3 text-[10px] tracking-widest uppercase bg-cream/90 text-charcoal px-2.5 py-1">
            Bestseller
          </span>
        )}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-3 left-3 right-3 py-2.5 bg-cream/95 text-charcoal text-xs tracking-widest uppercase font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:bg-charcoal hover:text-cream ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
          aria-label="Quick add to cart"
        >
          <ShoppingBag size={14} />
          Quick Add
        </button>
      </div>
      <div className="space-y-1">
        <div className="flex items-center gap-1.5">
          <StarRating rating={product.rating} size={11} />
          <span className="text-[10px] text-stone">({product.reviews})</span>
        </div>
        <h3 className="font-serif text-sm tracking-widest uppercase font-medium group-hover:text-gold transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-stone">${product.price}</p>
      </div>
    </Link>
  );
}
