import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import Button from './Button';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant);
  };

  const imageToShow = isHovered && product.images?.[1] 
    ? product.images[1] 
    : product.images?.[0];

  return (
    <Link 
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-[#EDE8DF] aspect-[4/3.5]">
        <img 
          src={imageToShow} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        
        {/* Quick Add Overlay */}
        {showQuickAdd && (
          <div className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            <div className="flex gap-2">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-[#F8F5F0] text-[#1C1B18] text-xs tracking-[1.5px] py-3 flex items-center justify-center gap-2 hover:bg-[#BFA46F] hover:text-[#F8F5F0] transition-colors"
              >
                <ShoppingBag className="h-3.5 w-3.5" />
                ADD TO CART
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="pt-4 pb-2">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-serif text-sm tracking-[2px] text-[#1C1B18] uppercase pr-2 leading-tight">
            {product.name}
          </h3>
          <span className="text-sm text-[#1C1B18] whitespace-nowrap tabular-nums">
            {formatPrice(product.price)}
          </span>
        </div>
        <p className="text-xs text-[#8A8175] mt-1 tracking-[0.5px]">
          {product.shortDescription}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
