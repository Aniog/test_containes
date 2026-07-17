import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const ProductCard = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    onAddToCart({ ...product, quantity: 1, variant: product.variants?.[0] || 'gold' });
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-[#F5F2ED] aspect-[4/3] mb-4">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C2522]/5 to-transparent" />
        {/* Placeholder for product image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-[#C5A26F]/30 text-6xl">✧</div>
        </div>
        {/* Quick add button on hover */}
        <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 transition-all duration-200 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <Button 
            size="sm" 
            onClick={handleAddToCart}
            className="shadow-lg"
          >
            Add to Cart
          </Button>
        </div>
      </div>
      <div className="space-y-1">
        <p className="font-serif text-sm tracking-[2px] text-[#2C2522] group-hover:text-[#C5A26F] transition-colors">
          {product.name}
        </p>
        <p className="text-sm text-[#6B635C]">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
