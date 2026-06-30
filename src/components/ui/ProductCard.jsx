import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsAdding(true);
    addItem(product, 1, 'gold');
    
    // Reset loading state after animation
    setTimeout(() => setIsAdding(false), 600);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-cream-100 mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            isHovered && product.images[1] ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        
        {/* Secondary Image (on hover) */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} - alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          />
        )}

        {/* Quick Add Button */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={handleQuickAdd}
            disabled={isAdding}
            className="w-full py-3 bg-warm-900/90 backdrop-blur-sm text-white text-xs uppercase tracking-extra-wide 
                       hover:bg-warm-900 transition-all duration-300 flex items-center justify-center gap-2"
          >
            {isAdding ? (
              <>
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Adding...
              </>
            ) : (
              <>
                <Plus size={14} strokeWidth={2} />
                Quick Add
              </>
            )}
          </button>
        </div>

        {/* Bestseller Badge */}
        {product.tags?.includes('bestseller') && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-gold-400/90 text-warm-900 text-xs uppercase tracking-wide">
            Bestseller
          </span>
        )}

        {/* New Badge */}
        {product.tags?.includes('new') && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-warm-900/90 text-white text-xs uppercase tracking-wide">
            New
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <h3 className="product-name text-sm">{product.name}</h3>
        <p className="text-warm-600 text-sm">${product.price}</p>
        
        {/* Rating */}
        <div className="flex items-center gap-1 pt-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-3.5 h-3.5 ${
                i < Math.floor(product.rating)
                  ? 'text-gold-400'
                  : 'text-warm-200'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-warm-500 text-xs ml-1">({product.reviews})</span>
        </div>
      </div>
    </Link>
  );
}
