import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import StarRating from './StarRating';

export default function ProductCard({ product, primaryImg, hoverImg }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'Gold', 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div
      className="group relative flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        {/* Image container */}
        <div className="relative overflow-hidden bg-linen aspect-[4/5]">
          {/* Primary image */}
          <div className={`absolute inset-0 transition-all duration-500 ${hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}>
            {primaryImg ?? <div className="w-full h-full bg-linen" />}
          </div>
          {/* Hover image */}
          <div className={`absolute inset-0 transition-all duration-500 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
            {hoverImg ?? primaryImg ?? <div className="w-full h-full bg-linen" />}
          </div>

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 bg-espresso text-ivory font-sans text-[10px] font-medium uppercase tracking-widest px-2.5 py-1 z-10">
              {product.badge}
            </span>
          )}

          {/* Quick add button */}
          <button
            onClick={handleAddToCart}
            className={`absolute bottom-0 left-0 right-0 bg-espresso text-ivory font-sans text-xs font-medium uppercase tracking-widest py-3 flex items-center justify-center gap-2 transition-all duration-300 z-10 ${
              hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            } hover:bg-gold hover:text-espresso`}
          >
            <ShoppingBag size={14} />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>

        {/* Info */}
        <div className="pt-4 pb-2">
          <p className="font-serif font-medium uppercase tracking-widest text-sm text-espresso leading-tight group-hover:text-gold transition-colors duration-300">
            {product.name}
          </p>
          <p className="font-sans text-xs text-taupe mt-1">{product.description}</p>
          <div className="flex items-center justify-between mt-2">
            <StarRating rating={product.rating} count={product.reviews} size={12} />
            <span className="font-serif text-base text-espresso">${product.price}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
