import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../cart/CartContext';

export function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="group relative flex flex-col cursor-pointer mt-4">
      <Link to={`/products/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-muted mb-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-0"
        />
        <img 
          src={product.hoverImage || product.image} 
          alt={`${product.name} worn`} 
          className="object-cover w-full h-full absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
        
        {/* Quick Add Button */}
        <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="w-full bg-background/95 backdrop-blur text-foreground py-3 text-sm uppercase tracking-widest font-medium border border-transparent shadow hover:border-foreground transition-colors"
          >
            Quick Add
          </button>
        </div>
      </Link>
      
      <Link to={`/products/${product.id}`} className="flex flex-col flex-1">
        <h3 className="font-serif text-lg tracking-wide uppercase hover:text-primary transition-colors">{product.name}</h3>
        <p className="text-muted-foreground text-sm mt-1 mb-2">{product.material}</p>
        <span className="mt-auto font-medium">${product.price.toFixed(2)}</span>
      </Link>
    </div>
  );
}
