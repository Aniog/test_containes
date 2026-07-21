import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    addItem(product);
    setTimeout(() => setIsAdding(false), 800);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-champagne/20 overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          }`}
        />
        
        {/* Secondary Image (hover) */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 bg-charcoal text-cream text-xs font-sans font-medium tracking-wide">
              {product.badge}
            </span>
          </div>
        )}

        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-0 left-0 right-0 py-3 bg-charcoal/90 text-cream text-sm font-sans font-medium tracking-wide flex items-center justify-center gap-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          {isAdding ? 'Added!' : 'Quick Add'}
        </button>
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <h3 className="product-name text-charcoal group-hover:text-gold-700 transition-colors">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating)
                    ? 'text-gold-500 fill-gold-500'
                    : 'text-sand'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-taupe font-sans">({product.reviews})</span>
        </div>

        <p className="font-sans text-charcoal">${product.price}</p>
      </div>
    </Link>
  );
}
