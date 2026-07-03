import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Plus } from 'lucide-react';

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const [isHovered, setIsHovered] = React.useState(false);

  const handleAddToCart = (e) => {
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
      <div className="product-card-image mb-4">
        <img
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full aspect-square object-cover"
        />
        
        {/* Quick Add Button */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-[#2A2520] px-6 py-2 uppercase tracking-wider text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#B8860B] hover:text-white"
        >
          <Plus size={16} className="inline-block mr-2" />
          Add to Cart
        </button>
      </div>

      <div className="text-center">
        <h3 className="product-name text-sm mb-2">{product.name}</h3>
        <p className="text-[#6B6560] text-sm mb-2">{product.description}</p>
        <p className="font-medium">${product.price}</p>
        
        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-[#B8860B]' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-xs text-[#6B6560] ml-1">({product.reviews})</span>
        </div>
      </div>
    </Link>
  );
}
