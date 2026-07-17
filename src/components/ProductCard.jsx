import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import Button from './ui/Button';

export default function ProductCard({ product, showQuickAdd = true }) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || 'Gold Tone');
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant, 1);
  };

  const displayImage = isHovered && product.images.length > 1 
    ? product.images[1] 
    : product.images[0];

  return (
    <div 
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-[#EDE8E0] aspect-[4/3.5] mb-4">
        {/* Image Link - covers image area but stops well above Quick Add strip */}
        <Link 
          to={`/product/${product.slug}`} 
          className="absolute inset-0 bottom-14 z-10 block pointer-events-auto"
          aria-label={product.name}
        >
          <img 
            src={displayImage} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03] pointer-events-none"
          />
        </Link>
        
        {/* Quick Add button - sibling to Link, absolutely positioned at bottom */}
        {showQuickAdd && (
          <div 
            className={`absolute inset-x-0 bottom-0 p-4 z-30 transition-all duration-300 pointer-events-auto ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}
          >
            <Button 
              onClick={handleQuickAdd}
              className="w-full text-xs tracking-[2px]"
              size="sm"
            >
              QUICK ADD
            </Button>
          </div>
        )}

        {/* Price Badge */}
        <div className="absolute top-3 right-3 bg-[#F5F2ED] px-3 py-1 text-xs tracking-[1px] text-[#1A1A1A] z-20">
          ${product.price}
        </div>
      </div>

      {/* Title Link - separate from image */}
      <Link to={`/product/${product.slug}`}>
        <div className="space-y-1">
          <h3 className="font-serif text-sm tracking-[2px] text-[#1A1A1A] group-hover:text-[#C5A46E] transition-colors">
            {product.name}
          </h3>
          <p className="text-xs text-[#8B7B6B]">{product.category}</p>
        </div>
      </Link>
    </div>
  );
}
