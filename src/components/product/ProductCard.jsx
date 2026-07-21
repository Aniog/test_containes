import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, 'gold');
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] bg-[#E8DCC4] overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        {/* Secondary Image (on hover) */}
        <img
          src={product.images[1]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        />
        
        {/* Quick Add Button */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-4 left-4 right-4 bg-[#FAF9F7] text-[#1A1918] py-3 px-4 flex items-center justify-center gap-2 text-sm font-semibold transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          } hover:bg-[#C9A962] hover:text-[#1A1918]`}
        >
          <ShoppingBag className="w-4 h-4" />
          Add to Cart
        </button>
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="product-name text-[#1A1918] group-hover:text-[#C9A962] transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-1 mt-2">
          <Star className="w-3.5 h-3.5 fill-[#C9A962] text-[#C9A962]" />
          <span className="text-xs text-[#6B6560]">
            {product.rating} ({product.reviews})
          </span>
        </div>
        <p className="mt-2 text-[#1A1918] font-semibold">${product.price}</p>
      </div>
    </Link>
  );
}