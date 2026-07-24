import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useState } from 'react';

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-cream-200 overflow-hidden mb-4">
        <div
          data-strk-bg-id={`product-card-${product.id}`}
          data-strk-bg={product.imgQuery}
          data-strk-bg-ratio="3x4"
          data-strk-bg-width="600"
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        />

        {/* Quick add overlay */}
        <div
          className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ${
            isHovered
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-2'
          }`}
        >
          <button
            onClick={handleQuickAdd}
            className="w-full bg-white/95 backdrop-blur-sm text-charcoal py-3 px-4 font-sans text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-gold-500 hover:text-white transition-colors duration-200"
          >
            <ShoppingBag className="w-4 h-4" />
            Quick Add
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="text-center">
        <h3 className="product-name text-sm mb-1">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mb-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating) ? 'fill-gold-400 text-gold-400' : 'text-gray-300'
              }`}
            />
          ))}
          <span className="text-[10px] text-gray-400 ml-1">({product.reviewCount})</span>
        </div>

        <p className="font-sans text-base font-medium text-charcoal">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}
