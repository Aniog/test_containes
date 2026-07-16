import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import Button from './Button';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    
    // Default to first variant (gold)
    const defaultVariant = product.variants?.[0] || 'Gold';
    addToCart(product, defaultVariant, 1);

    setTimeout(() => {
      setIsAdding(false);
    }, 600);
  };

  const displayImage = isHovered && product.imageSecondary ? product.imageSecondary : product.image;

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-[#E5E0D8] aspect-[4/3.6] mb-4">
        <img
          src={displayImage}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        
        {/* Quick Add Overlay */}
        {showQuickAdd && (
          <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200">
            <Button
              variant="solid"
              size="sm"
              className="w-full text-xs tracking-[1.5px] py-2.5"
              onClick={handleQuickAdd}
              disabled={isAdding}
            >
              {isAdding ? 'ADDED' : (
                <>
                  <ShoppingBag className="h-3.5 w-3.5 mr-2" />
                  QUICK ADD
                </>
              )}
            </Button>
          </div>
        )}

        {/* Price Tag */}
        <div className="absolute top-3 right-3 bg-white/90 px-3 py-1 text-xs tracking-widest text-[#1A1A1A]">
          ${product.price}
        </div>
      </div>

      <div className="px-1">
        <h3 className="font-serif text-sm uppercase tracking-[2px] text-[#1A1A1A] leading-tight mb-1">
          {product.name}
        </h3>
        <p className="text-xs text-[#8B8178]">{product.category}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
