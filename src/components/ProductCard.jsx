import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../lib/data';
import { useCartStore } from '../store/useCartStore';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem, openCart } = useCartStore();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      variant: 'Gold',
      quantity: 1
    });
    
    openCart();
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/5] bg-muted mb-4 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <img 
          src={product.hoverImage || product.image} 
          alt={`${product.name} lifestyle`} 
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        />
        
        {/* Quick Add Button */}
        <div className={`absolute bottom-0 left-0 w-full p-4 transform transition-transform duration-300 ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}>
          <button 
            onClick={handleAddToCart}
            className="w-full bg-white text-foreground py-3 font-medium text-sm tracking-widest uppercase hover:bg-primary hover:text-white transition-colors shadow-soft"
          >
            Add to Cart
          </button>
        </div>
      </div>
      
      <div className="text-center">
        <h3 className="font-serif text-lg mb-1">{product.name}</h3>
        <p className="text-muted-foreground">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;