import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { ShoppingBag, Heart } from 'lucide-react';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
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
      <Link to={`/product/${product.id}`} className="block">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-velmora-sand aspect-square mb-4">
          <img
            src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Quick Add Button */}
          <button
            onClick={handleQuickAdd}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-velmora-charcoal 
                     px-6 py-2 text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 
                     transition-all duration-300 hover:bg-velmora-gold hover:text-white"
          >
            <ShoppingBag size={16} className="inline-block mr-2" />
            Add to Cart
          </button>

          {/* Wishlist */}
          <button className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Heart size={20} className="text-velmora-charcoal hover:text-red-500" />
          </button>
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <h3 className="uppercase tracking-wider text-sm font-medium">{product.name}</h3>
          <p className="text-sm text-velmora-text-light">{product.description}</p>
          <div className="flex items-center justify-between">
            <span className="font-medium">${product.price}</span>
            <div className="flex items-center text-sm">
              <span className="text-velmora-gold">★</span>
              <span className="ml-1 text-velmora-text-light">{product.rating}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

function Link({ to, children, className }) {
  return (
    <a href={to} className={className}>
      {children}
    </a>
  );
}
