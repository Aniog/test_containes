import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product, showQuickAdd = true }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
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
      <div className="relative aspect-[4/5] bg-[var(--color-secondary-dark)] overflow-hidden mb-4">
        {/* Primary Image */}
        <img 
          src={product.images[0]} 
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Secondary Image on Hover */}
        {product.images[1] && (
          <img 
            src={product.images[1]} 
            alt={`${product.name} - alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Quick Add Button */}
        {showQuickAdd && (
          <button 
            onClick={handleQuickAdd}
            className={`absolute bottom-4 left-4 right-4 py-3 bg-[var(--color-primary)] text-white text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            Quick Add
          </button>
        )}
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="product-name text-[10px]">{product.name}</h3>
        <p className="mt-2 text-[var(--color-accent)] font-medium">${product.price}</p>
        
        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mt-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span 
                key={i} 
                className={`text-xs ${i < Math.floor(product.rating) ? 'text-[var(--color-accent)]' : 'text-[var(--color-muted-light)]'}`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-xs text-[var(--color-muted)]">({product.reviews})</span>
        </div>
      </div>
    </Link>
  );
}