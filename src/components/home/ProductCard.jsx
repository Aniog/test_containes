import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 'Gold', 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-[#1A1A1A] overflow-hidden mb-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-500 ${
            isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        <img
          src={product.images[1]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {/* Quick Add Button */}
        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            className={`absolute bottom-4 left-4 right-4 py-3 bg-[#C9A962] text-[#0D0D0D] text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            } hover:bg-[#D4B978]`}
          >
            <ShoppingBag size={16} strokeWidth={2} />
            Quick Add
          </button>
        )}
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="font-serif text-sm uppercase tracking-[0.15em] text-[#F5F5F0] mb-1 group-hover:text-[#C9A962] transition-colors">
          {product.name}
        </h3>
        <p className="text-[#C9A962] font-medium">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;