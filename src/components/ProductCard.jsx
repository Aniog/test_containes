import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault(); // Prevent navigating to product immediately
    addToCart(product);
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-muted mb-4 group-hover:shadow-md transition-shadow duration-300">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
        />
        {product.images[1] && (
          <img 
            src={product.images[1]} 
            alt={`${product.name} alternate view`}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          />
        )}
        
        {/* Quick Add overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <button 
            onClick={handleQuickAdd}
            className="w-full bg-background/95 backdrop-blur-sm text-foreground py-3 text-sm font-medium tracking-wide hover:bg-accent hover:text-white transition-colors"
          >
            Quick Add
          </button>
        </div>
      </div>
      
      <div className="flex flex-col items-center text-center">
        <h3 className="font-serif text-lg tracking-wide uppercase text-primary mb-1">{product.name}</h3>
        <p className="text-muted-foreground">${product.price}</p>
      </div>
    </Link>
  );
};
