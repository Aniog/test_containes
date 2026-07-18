import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant);
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="product-image-container aspect-[4/3.5] bg-[#E5E0D8] mb-4 overflow-hidden relative">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="product-image w-full h-full object-cover"
        />
        <img 
          src={product.images[1] || product.images[0]} 
          alt={product.name}
          className="product-image-secondary w-full h-full object-cover"
        />
        
        {/* Quick Add Button */}
        <div className="quick-add">
          <Button 
            variant="primary" 
            className="text-xs py-2.5 px-6"
            onClick={handleQuickAdd}
          >
            Quick Add
          </Button>
        </div>
      </div>

      <div className="space-y-1">
        <div className="product-name text-sm tracking-wider pr-2">{product.name}</div>
        <div className="flex items-center justify-between">
          <div className="text-sm text-[#8B7E6B]">${product.price}</div>
          <div className="text-xs text-[#8B7E6B]">{product.category}</div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;