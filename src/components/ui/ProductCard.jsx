import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-[#f5f5f5] overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {/* Secondary Image */}
        <img
          src={product.images[1] || product.images[0]}
          alt={`${product.name} alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
        
        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-4 left-4 right-4 py-3 bg-white/95 backdrop-blur-sm text-[#1a1a1a] text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#d4af37] ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <ShoppingBag size={14} />
          Add to Bag
        </button>

        {/* Bestseller Badge */}
        {product.bestseller && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-[#1a1a1a] text-white text-xs tracking-[0.1em]">
            BESTSELLER
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="font-serif text-sm tracking-[0.15em] text-[#1a1a1a] mb-1 group-hover:text-[#d4af37] transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-1 mb-2">
          <Star size={12} className="fill-[#d4af37] text-[#d4af37]" />
          <span className="text-xs text-[#1a1a1a]/60">
            {product.rating} ({product.reviews})
          </span>
        </div>
        <p className="text-sm font-medium text-[#1a1a1a]">${product.price}</p>
      </div>
    </Link>
  );
}
