import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product, index = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
  };

  return (
    <div
      className="group animate-slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <Link
        to={`/product/${product.slug}`}
        className="block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative aspect-[3/4] bg-charcoal-100 overflow-hidden mb-4">
          {/* Primary Image */}
          <img
            src={product.images[0]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
            }`}
          />
          
          {/* Secondary Image (hover) */}
          {product.images[1] && (
            <img
              src={product.images[1]}
              alt={`${product.name} - alternate view`}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}

          {/* Badge */}
          {product.badge && (
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-cream-50 text-[10px] uppercase tracking-[0.15em] font-medium">
                {product.badge}
              </span>
            </div>
          )}

          {/* Quick Add Button */}
          <button
            onClick={handleQuickAdd}
            className={`absolute bottom-4 left-4 right-4 py-3 bg-charcoal-900 text-cream-50 text-[11px] uppercase tracking-[0.15em] font-medium
                       flex items-center justify-center gap-2 transition-all duration-300 hover:bg-charcoal-800
                       ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
          >
            <Plus className="w-3 h-3" />
            Quick Add
          </button>
        </div>

        {/* Product Info */}
        <div className="space-y-1">
          <h3 className="font-serif text-sm tracking-[0.1em] uppercase text-charcoal-900 group-hover:text-accent transition-colors duration-300">
            {product.name}
          </h3>
          <div className="flex items-center gap-3">
            <p className="text-sm text-charcoal-700">${product.price}</p>
            <div className="flex items-center gap-1">
              <span className="text-[10px] text-gold-500">★</span>
              <span className="text-xs text-charcoal-500">{product.rating}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
