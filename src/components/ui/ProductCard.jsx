import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../lib/CartContext';
import { toast } from 'sonner';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to bag`);
  };

  return (
    <div 
      className="group relative flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block overflow-hidden relative aspect-[3/4] bg-zinc-100">
        <img 
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]} 
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        />
        
        {/* Quick Add Button */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-4">
          <button 
            onClick={handleAddToCart}
            className="w-full bg-white text-zinc-900 py-3 text-[10px] uppercase-widest tracking-widest hover:bg-zinc-900 hover:text-white transition-colors border border-zinc-200"
          >
            Quick Add
          </button>
        </div>
      </Link>
      
      <div className="mt-6 flex flex-col items-center text-center">
        <Link to={`/product/${product.id}`} className="hover:opacity-60 transition-opacity">
          <h3 className="font-serif text-sm uppercase tracking-widest mb-2 px-2">{product.name}</h3>
        </Link>
        <p className="text-zinc-500 font-light text-sm tracking-wide">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
