import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart } from 'lucide-react';
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
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden bg-[#F5F3F0] aspect-square mb-4">
          <img
            src={isHovered && product.images?.[1] ? product.images[1] : product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Quick actions overlay */}
          <div className={`absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <button
              onClick={handleAddToCart}
              className="bg-white text-[#2C2C2C] px-6 py-3 text-sm tracking-wider uppercase hover:bg-[#C9A96E] hover:text-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
            >
              <ShoppingBag size={16} className="inline mr-2" />
              Add to Cart
            </button>
          </div>

          {/* Wishlist button */}
          <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Heart size={18} className="text-[#2C2C2C]" />
          </button>
        </div>

        <div className="text-center">
          <h3 className="font-serif text-lg mb-2 tracking-wider uppercase">
            {product.name}
          </h3>
          <p className="text-sm text-[#9A9590] mb-2">{product.description}</p>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex text-[#C9A96E]">
              {'★'.repeat(Math.floor(product.rating))}
            </div>
            <span className="text-sm text-[#9A9590]">({product.reviews})</span>
          </div>
          <p className="font-serif text-xl mt-2">${product.price}</p>
        </div>
      </Link>
    </div>
  );
}
