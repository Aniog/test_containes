import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const { openCart, addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault(); // Prevent navigating to product page
    e.stopPropagation();
    
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant: 'gold', // Default variant for quick add
      quantity: 1
    });
    openCart();
  };

  return (
    <Link to={`/product/${product.id}`} className="group block group/card">
      <div className="relative aspect-[3/4] overflow-hidden bg-brand-50 mb-4">
        {/* Primary Image */}
        <img 
          src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
          data-strk-img-id={product.images[0].id}
          data-strk-img={product.images[0].query}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out z-10 group-hover:opacity-0"
        />
        
        {/* Secondary (Hover) Image */}
        {product.images[1] && (
          <img 
            src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
            data-strk-img-id={product.images[1].id}
            data-strk-img={product.images[1].query}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            alt={`${product.name} detail`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        
        {/* Quick Add Button */}
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transform translate-y-4 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 z-20">
          <button 
            onClick={handleQuickAdd}
            className="w-full py-3 bg-background/95 backdrop-blur-sm text-foreground uppercase tracking-widest text-xs font-medium border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          >
            Quick Add
          </button>
        </div>
      </div>
      
      <div className="text-center">
        <h3 className="font-sans font-medium uppercase tracking-widest text-sm mb-2">{product.name}</h3>
        <p className="text-primary">${product.price}</p>
      </div>
    </Link>
  );
}