import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Button from './Button';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState('Gold');

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card group block">
      <div className="relative aspect-[4/3] bg-[#F8F5F1] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="primary absolute inset-0 w-full h-full object-cover"
        />
        <img 
          src={product.imageSecondary} 
          alt={product.name}
          className="secondary absolute inset-0 w-full h-full object-cover opacity-0"
        />
        
        {/* Quick Add Overlay */}
        <div className="quick-add">
          <div className="flex gap-2 mb-3">
            {['Gold', 'Silver'].map((v) => (
              <button
                key={v}
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setSelectedVariant(v); }}
                className={`flex-1 py-1.5 text-xs tracking-wider border transition-colors ${
                  selectedVariant === v 
                    ? 'bg-white text-[#2C2823] border-white' 
                    : 'border-white/50 text-white hover:border-white'
                }`}
              >
                {v}
              </button>
            ))}
          </div>
          <Button 
            variant="primary" 
            className="w-full text-xs py-2.5"
            onClick={handleAddToCart}
          >
            ADD TO CART
          </Button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start gap-2">
          <h3 className="product-name text-sm tracking-wider pr-2">{product.name}</h3>
          <span className="text-sm font-medium whitespace-nowrap">${product.price}</span>
        </div>
        <p className="text-xs text-[#6B665F] mt-1">{product.category}</p>
      </div>
    </Link>
  );
};

export default ProductCard;