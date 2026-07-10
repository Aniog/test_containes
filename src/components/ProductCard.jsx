import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import StarRating from './StarRating';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [justQuickAdded, setJustQuickAdded] = useState(false);
  const { addItem } = useCart();
  const navigate = useNavigate();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setJustQuickAdded(true);
    addItem(product, 1, 'gold');
    setTimeout(() => setJustQuickAdded(false), 200);
  };

  const goToProduct = () => {
    if (justQuickAdded) return;
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[4/5] bg-parchment overflow-hidden mb-3 cursor-pointer" onClick={goToProduct}>
        <img
          data-strk-img-id={`card-${product.images[0].id}`}
          data-strk-img={`[card-title-${product.id}] [card-desc-${product.id}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? 'scale-105' : 'scale-100'}`}
        />
        <span id={`card-title-${product.id}`} className="sr-only">{product.name}</span>
        <span id={`card-desc-${product.id}`} className="sr-only">{product.description}</span>

        {hovered && (
          <div className="absolute inset-0 bg-charcoal/10 transition-opacity duration-300 pointer-events-none" />
        )}
      </div>

      <button
        onClick={handleQuickAdd}
        className={`w-full mb-3 bg-cream text-charcoal py-2.5 text-xs font-medium tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-white transition-all duration-300 shadow-sm border hairline relative z-10 ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        <ShoppingBag size={14} strokeWidth={1.5} />
        Quick Add
      </button>

      <div className="cursor-pointer" onClick={goToProduct}>
        <div className="flex flex-col gap-1">
          <h3 className="font-serif text-base md:text-lg tracking-wide uppercase">
            {product.name}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">${product.price}</span>
            <StarRating rating={product.rating} count={product.reviewCount} />
          </div>
        </div>
      </div>
    </div>
  );
}
