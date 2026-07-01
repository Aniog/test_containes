import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, 'gold');
  };

  return (
    <div 
      className="group animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        {/* Image Container */}
        <div className="relative aspect-[4/5] bg-white overflow-hidden mb-4">
          {/* Primary Image */}
          <img 
            src={product.images[0]} 
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}
          />
          {/* Hover Image */}
          <img 
            src={product.images[1]} 
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
          
          {/* Quick Add Button */}
          <button 
            onClick={handleQuickAdd}
            className={`absolute bottom-0 left-0 right-0 bg-[#1A1814] text-white py-3 text-sm uppercase tracking-widest transition-all duration-300 hover:bg-[#C9A962] ${
              isHovered ? 'translate-y-0' : 'translate-y-full'
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              Quick Add
            </span>
          </button>
        </div>

        {/* Product Info */}
        <div className="text-center">
          <h3 className="product-name text-sm mb-1">{product.name}</h3>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-3 h-3 ${i < product.rating ? 'text-[#C9A962] fill-[#C9A962]' : 'text-[#E8E4DF]'}`} 
              />
            ))}
            <span className="text-xs text-[#6B635A] ml-1">({product.reviews})</span>
          </div>
          <p className="font-medium">${product.price}</p>
        </div>
      </Link>
    </div>
  );
}