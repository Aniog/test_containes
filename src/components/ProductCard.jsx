import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    addToCart(product, 'Gold', 1);
    setTimeout(() => setIsAdding(false), 600);
  };

  const handleCardClick = (e) => {
    // Guard: if click originated from the Quick Add button, do nothing
    const clickedButton = e.target.closest('button');
    if (clickedButton) {
      return;
    }
    navigate(`/product/${product.slug}`);
  };

  return (
    <div
      className="group block relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      <div className="relative overflow-hidden bg-[#F5F2ED] aspect-[4/3] mb-4">
        <img
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        
        {/* Quick Add Button - appears on hover, absolutely positioned over image */}
        {showQuickAdd && (
          <div 
            className={`absolute bottom-4 left-1/2 -translate-x-1/2 z-30 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <Button
              size="sm"
              onClick={handleQuickAdd}
              disabled={isAdding}
              className="shadow-lg"
            >
              {isAdding ? 'ADDED' : 'QUICK ADD'}
            </Button>
          </div>
        )}
      </div>

      <div className="space-y-1">
        <h3 className="font-serif text-sm tracking-[2px] text-[#2C2825] group-hover:text-[#B89778] transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-[#6B665F] tracking-[1px]">{product.category.toUpperCase()}</p>
        <p className="text-sm text-[#2C2825] pt-1">{formatPrice(product.price)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
