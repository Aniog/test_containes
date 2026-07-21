import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { ShoppingBag, Plus } from 'lucide-react';

export default function ProductCard({ product, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, 'Gold');
  };

  return (
    <div
      className="group animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-velmora-warm-gray aspect-square mb-4">
          <img
            src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
          />
          
          {/* Quick Add Button */}
          <button
            onClick={handleAddToCart}
            className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 btn-premium text-sm py-2 px-6 
              transition-all duration-300 ${
                isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
          >
            <ShoppingBag size={16} className="inline-block mr-2" />
            Add to Cart
          </button>
        </div>

        {/* Product Info */}
        <div className="text-center">
          <h3 className="font-serif text-sm tracking-widest uppercase mb-2">
            {product.name}
          </h3>
          <p className="text-sm text-velmora-text-light mb-2">
            {product.description}
          </p>
          <p className="font-serif text-lg">${product.price}.00</p>
          
          {/* Rating */}
          <div className="flex items-center justify-center mt-2 space-x-1">
            <div className="star-rating">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < Math.floor(product.rating) ? 'text-velmora-gold' : 'text-gray-300'}>
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs text-velmora-text-light ml-1">
              ({product.reviews})
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
