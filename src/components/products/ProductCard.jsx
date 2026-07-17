import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-warm-100 mb-4">
        <div
          className="w-full h-full transition-transform duration-700 group-hover:scale-105"
          data-strk-img-id={`product-card-${product.id}-${isHovered ? '2' : '1'}`}
          data-strk-img={`[product-name-${product.id}] gold jewelry editorial on model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
        />

        {/* Quick add button */}
        <button
          onClick={handleAdd}
          className={`absolute bottom-3 left-3 right-3 py-2.5 text-xs tracking-widest uppercase font-sans font-medium text-center transition-all duration-300 ${
            added
              ? 'bg-gold-400 text-espresso-900'
              : 'bg-cream/90 text-espresso-700 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0'
          }`}
        >
          {added ? 'Added!' : (
            <span className="flex items-center justify-center gap-1.5">
              <ShoppingBag className="w-3 h-3" />
              Quick Add
            </span>
          )}
        </button>
      </div>

      {/* Info */}
      <p id={`product-name-${product.id}`} className="product-name text-sm font-medium text-espresso-800 mb-1">
        {product.name}
      </p>
      <div className="flex items-center gap-1 mb-1.5">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < Math.round(product.rating) ? 'text-gold-400 fill-gold-400' : 'text-espresso-200'}`}
            />
          ))}
        </div>
        <span className="text-xs text-espresso-400">({product.reviewCount})</span>
      </div>
      <p className="font-sans text-sm font-medium text-espresso-700">${product.price}</p>
    </Link>
  );
}
