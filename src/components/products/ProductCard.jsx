import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, product.variants[0]);
  };

  return (
    <div
      className="group animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-[4/5] bg-[#E5E0D8] overflow-hidden mb-4">
          {/* First Image */}
          <img
            src={product.images[0]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            } ${isHovered ? 'opacity-0' : 'opacity-100'}`}
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Second Image on Hover */}
          {product.images[1] && (
            <img
              src={product.images[1]}
              alt={product.name}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}

          {/* Quick Add Button */}
          <button
            onClick={handleQuickAdd}
            className={`absolute bottom-4 left-4 right-4 py-3 bg-white/95 text-[#1A1A1A] text-xs uppercase tracking-widest transition-all duration-300 hover:bg-[#C9A962] hover:text-white ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
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
          <h3 className="font-serif text-sm uppercase tracking-widest mb-1">{product.name}</h3>
          <p className="text-[#6B6560] text-sm">${product.price}</p>
          
          {/* Rating */}
          <div className="flex items-center justify-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < product.rating ? 'fill-[#C9A962] text-[#C9A962]' : 'text-[#E5E0D8]'}`}
              />
            ))}
            <span className="text-xs text-[#6B6560] ml-1">({product.reviews})</span>
          </div>
        </div>
      </Link>
    </div>
  );
}