import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div 
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden bg-velmora-warm aspect-square mb-4">
          <img
            src={product.images[0]}
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <img
            src={product.images[1]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
          
          {/* Quick Add Button */}
          <button
            onClick={handleAddToCart}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-velmora-charcoal px-6 py-2 text-sm uppercase tracking-wider
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-velmora-gold hover:text-white"
          >
            <Plus size={16} className="inline mr-2" />
            Add to Cart
          </button>

          {/* Wishlist */}
          <button className="absolute top-4 right-4 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-red-500">
            <Heart size={18} />
          </button>
        </div>

        <div className="space-y-2">
          <h3 className="product-name text-velmora-charcoal">{product.name}</h3>
          <p className="text-sm text-gray-600 uppercase tracking-wider">{product.category}</p>
          <div className="flex items-center space-x-2">
            <div className="flex text-yellow-400 text-sm">
              {'★'.repeat(Math.floor(product.rating))}
            </div>
            <span className="text-sm text-gray-600">${product.price}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}