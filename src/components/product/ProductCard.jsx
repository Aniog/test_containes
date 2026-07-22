import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsAdding(true);
    addItem(product, 1, product.variants[0] || 'gold');
    
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-bg-alt rounded overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        
        {/* Secondary Image (hover) */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          />
        )}

        {/* Quick Add Button */}
        <div
          className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <button
            onClick={handleQuickAdd}
            disabled={isAdding}
            className={`w-full py-3 flex items-center justify-center gap-2 text-xs font-medium tracking-extra-wide uppercase transition-all duration-200 ${
              isAdding
                ? 'bg-accent-dark text-white'
                : 'bg-white text-text hover:bg-accent hover:text-white'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            {isAdding ? 'Added' : 'Quick Add'}
          </button>
        </div>

        {/* Bestseller Badge */}
        {product.tags.includes('bestseller') && (
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 bg-bg-dark/80 text-white text-[10px] font-medium tracking-extra-wide uppercase backdrop-blur-sm">
              Bestseller
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <h3 className="product-name text-text group-hover:text-accent transition-colors duration-200">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-2">
          <span className="text-sm text-text font-medium">
            ${product.price}
          </span>
          
          {/* Rating */}
          <div className="flex items-center gap-1">
            <svg className="w-3 h-3 text-accent fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
            <span className="text-xs text-text-light">
              {product.rating} ({product.reviews})
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
