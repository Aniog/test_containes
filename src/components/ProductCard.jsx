import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, 'Gold');
  };

  return (
    <div
      className="product-card group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-square bg-card">
          <img
            src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          
          {/* Quick Add Button */}
          <button
            onClick={handleQuickAdd}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-foreground 
                       px-6 py-2 text-sm uppercase tracking-wider hover:bg-accent hover:text-white 
                       transition-all duration-300 opacity-0 group-hover:opacity-100 
                       transform translate-y-2 group-hover:translate-y-0"
          >
            <ShoppingBag size={16} className="inline-block mr-2" />
            Add to Cart
          </button>
        </div>

        {/* Product Info */}
        <div className="p-4 text-center">
          <h3 className="product-name text-lg mb-2 text-foreground">
            {product.name}
          </h3>
          <p className="text-sm text-muted mb-2">{product.description}</p>
          <div className="flex items-center justify-center space-x-1 mb-2">
            <Star size={14} className="fill-accent text-accent" />
            <span className="text-sm text-muted">{product.rating}</span>
          </div>
          <p className="text-lg font-medium text-foreground">
            ${product.price}
          </p>
        </div>
      </Link>
    </div>
  );
}
