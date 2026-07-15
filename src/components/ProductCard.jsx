import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product, showQuickAdd = true }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, 'gold');
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#F5F0E8] mb-4">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
        />
        
        {/* Hover Image */}
        <img
          src={product.imageHover || product.image}
          alt={`${product.name} - alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Quick Add Button */}
        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            className={`absolute bottom-4 left-4 right-4 py-3 bg-[#1A1A1A] text-white text-sm uppercase tracking-wider transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            } hover:bg-[#C9A962]`}
          >
            <span className="flex items-center justify-center gap-2">
              <ShoppingBag size={16} />
              Quick Add
            </span>
          </button>
        )}
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="product-name text-[#1A1A1A] mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-[#8B8580] mb-2">{product.description}</p>
        
        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className={i < product.rating ? 'fill-[#C9A962] text-[#C9A962]' : 'text-[#8B8580]'}
            />
          ))}
          <span className="text-xs text-[#8B8580] ml-1">({product.reviews})</span>
        </div>

        <p className="text-[#1A1A1A] font-medium">${product.price}</p>
      </div>
    </Link>
  );
}