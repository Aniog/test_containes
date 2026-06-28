import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import Button from './ui/Button';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant, 1);
  };

  return (
    <Link 
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-[#EDE8E0] aspect-[4/3.5] mb-4">
        <img 
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        
        {/* Quick Add Overlay */}
        {showQuickAdd && (
          <div className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            <Button 
              onClick={handleQuickAdd}
              className="w-full text-xs tracking-[2px]"
              size="sm"
            >
              <ShoppingBag className="h-3.5 w-3.5 mr-2" />
              QUICK ADD
            </Button>
          </div>
        )}

        {/* Variant Pills on Hover */}
        {isHovered && product.variants.length > 1 && (
          <div className="absolute top-3 right-3 flex gap-1.5">
            {product.variants.map((variant) => (
              <button
                key={variant}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelectedVariant(variant);
                }}
                className={`px-2.5 py-0.5 text-[10px] tracking-widest border transition-colors ${
                  selectedVariant === variant 
                    ? 'bg-[#1C1C1C] text-white border-[#1C1C1C]' 
                    : 'bg-white/90 text-[#1C1C1C] border-white/90 hover:bg-white'
                }`}
              >
                {variant}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="space-y-1 px-1">
        <h3 className="font-serif text-sm tracking-[2px] text-[#1C1C1C] group-hover:text-[#B89778] transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-sm text-[#6B665F]">{formatPrice(product.price)}</p>
          <div className="flex items-center gap-1 text-xs text-[#B89778]">
            ★ {product.rating}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
