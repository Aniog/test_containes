import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [isHovered, setIsHovered] = useState(false);
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
      <div className="relative aspect-[4/5] bg-stone-100 overflow-hidden mb-4">
        <img 
          src={isHovered && product.hoverImage ? product.hoverImage : product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Quick Add Button */}
        {showQuickAdd && (
          <button 
            onClick={handleQuickAdd}
            className={`absolute bottom-4 left-4 right-4 bg-cream text-charcoal py-3 text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 hover:bg-gold hover:text-charcoal`}
          >
            <ShoppingBag size={16} strokeWidth={1.5} />
            Quick Add
          </button>
        )}

        {/* Sale Badge */}
        {!product.inStock && (
          <div className="absolute top-4 left-4 bg-charcoal text-cream px-3 py-1 text-xs">
            Sold Out
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="product-name text-xs text-charcoal mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-stone-500 mb-2">{product.description}</p>
        
        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={12} 
              fill={i < product.rating ? '#C9A962' : 'none'}
              stroke={i < product.rating ? '#C9A962' : '#D6D3D1'}
              strokeWidth={1.5}
            />
          ))}
          <span className="text-xs text-stone-400 ml-1">({product.reviews})</span>
        </div>

        <p className="font-medium text-charcoal">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;