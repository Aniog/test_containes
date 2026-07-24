import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, product.variants[0]);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative aspect-[4/5] bg-[#F5F3EF] overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.image}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {/* Hover Image */}
        <img
          src={product.imageHover}
          alt={`${product.name} - alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-4 left-4 right-4 py-3 bg-[#FAF9F7] text-[#1A1815] text-sm tracking-[0.1em] uppercase transition-all duration-300 hover:bg-[#C9A962] hover:text-white ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          Quick Add
        </button>
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h3
          className="text-sm tracking-[0.15em] uppercase mb-1 group-hover:text-[#C9A962] transition-colors duration-300"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {product.name}
        </h3>
        <p className="text-sm text-[#6B6560] mb-2">{product.description}</p>
        
        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < product.rating
                  ? 'fill-[#C9A962] text-[#C9A962]'
                  : 'fill-[#E8E4DE] text-[#E8E4DE]'
              }`}
            />
          ))}
          <span className="text-xs text-[#6B6560] ml-1">({product.reviews})</span>
        </div>

        <p className="text-[#C9A962] font-medium">${product.price}</p>
      </div>
    </Link>
  );
}