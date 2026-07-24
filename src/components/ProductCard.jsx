import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product, onQuickAdd }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    if (onQuickAdd) onQuickAdd(product);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-cream aspect-[3/4] mb-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
        
        {/* Badge */}
        {product.badge && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-gold text-white text-xs uppercase tracking-wider">
            {product.badge}
          </span>
        )}

        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-0 left-0 right-0 py-3 bg-text-primary text-white text-xs uppercase tracking-wider transition-all duration-300 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          Add to Bag
        </button>
      </div>

      <div className="space-y-1">
        <h3 className="font-serif text-sm uppercase tracking-ultra-wide text-text-primary">
          {product.name}
        </h3>
        <p className="text-text-secondary text-sm">${product.price}</p>
      </div>
    </Link>
  );
}
