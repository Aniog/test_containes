import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';
import { formatPrice } from '@/lib/utils';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showAdded, setShowAdded] = useState(false);
  const { addToCart } = useCart();

  const defaultVariant = product.variants?.[0] || { id: 'gold', label: 'Gold' };

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, defaultVariant, 1);
    setShowAdded(true);
    setTimeout(() => setShowAdded(false), 1500);
  };

  return (
    <Link 
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-[#F8F6F2] aspect-[4/3] mb-4">
        <img
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.02]"
        />
        
        {/* Quick Add Button - appears on hover */}
        <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <Button 
            size="sm" 
            onClick={handleQuickAdd}
            className="shadow-lg"
          >
            {showAdded ? 'ADDED' : 'QUICK ADD'}
          </Button>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 text-[10px] tracking-[1px] text-[#4A4640]">
          {product.category.toUpperCase()}
        </div>
      </div>

      <div className="space-y-1 px-1">
        <h3 className="font-serif text-sm tracking-[2px] text-[#0A0806] group-hover:text-[#C5A46E] transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-[#4A4640]">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
