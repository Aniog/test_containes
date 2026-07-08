import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import imageMap from '@/lib/imageMap';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
  };

  const primarySrc = imageMap[product.imgId] || '';
  const hoverSrc = imageMap[product.imgHoverId || product.imgIdHover] || primarySrc;

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-stone-200 overflow-hidden mb-4">
        {/* Primary image */}
        <img
          src={primarySrc}
          alt={product.imgAlt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            hovered ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {/* Hover image */}
        <img
          src={hoverSrc}
          alt={`${product.imgAlt} - detail view`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Quick add button */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={handleQuickAdd}
            className="w-full flex items-center justify-center gap-2 bg-cream-100/95 backdrop-blur-sm text-dark-900 font-sans text-xs uppercase tracking-wider py-3 hover:bg-white transition-colors"
          >
            <ShoppingBag size={14} />
            Add to Bag
          </button>
        </div>
      </div>

      {/* Info */}
      <h3 className="product-name mb-1 text-dark-900">{product.name}</h3>
      <p className="font-sans text-sm text-dark-600 mb-1.5">${product.price}</p>
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={12}
            className={i < Math.round(product.rating) ? 'text-gold-500 fill-gold-500' : 'text-stone-300'}
          />
        ))}
        <span className="text-xs text-dark-500 ml-1">({product.reviewCount})</span>
      </div>
    </Link>
  );
}
