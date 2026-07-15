import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import StarRating from './StarRating';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] bg-velmora-border/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8DFD4] to-[#D4C8B8] flex items-center justify-center">
          <img
            data-strk-img-id={`product-${product.id}-img`}
            data-strk-img={`[product-${product.id}-name] gold jewelry elegant`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {hovered && (
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product, 'gold');
            }}
            className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm text-velmora-charcoal py-2.5 text-xs tracking-widest uppercase font-medium flex items-center justify-center gap-2 hover:bg-velmora-gold hover:text-white transition-all duration-300"
          >
            <ShoppingBag size={14} strokeWidth={1.5} />
            Quick Add
          </button>
        )}
      </Link>

      <div className="mt-4 text-center">
        <Link to={`/product/${product.id}`}>
          <h3
            id={`product-${product.id}-name`}
            className="font-serif text-sm tracking-widest-xl uppercase text-velmora-charcoal hover:text-velmora-gold transition-colors"
          >
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-center gap-2 mt-1.5">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[11px] text-velmora-muted">({product.reviews})</span>
        </div>
        <p className="text-sm font-medium mt-1.5 text-velmora-charcoal">${product.price}</p>
      </div>
    </div>
  );
}
