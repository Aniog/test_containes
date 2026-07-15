import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Button from './Button';

export default function ProductCard({ product, showQuickAdd = true }) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState('Gold');
  const { addToCart } = useCart();

  const currentImage = isHovered && product.imageSecondary ? product.imageSecondary : product.image;

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant);
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-[#F5F2ED] aspect-[4/3] mb-4">
        <img 
          src={currentImage} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
        
        {showQuickAdd && (
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-300">
            <Button 
              onClick={handleQuickAdd}
              className="w-full text-xs tracking-[2px]"
              size="sm"
            >
              <ShoppingBag className="w-3.5 h-3.5 mr-2" />
              QUICK ADD
            </Button>
          </div>
        )}

        {product.badge && (
          <span className="absolute top-3 right-3 px-3 py-1 bg-white/90 text-[10px] tracking-[1px] text-[#2C2825]">
            {product.badge}
          </span>
        )}
      </div>

      <div className="space-y-1">
        <p className="font-serif text-sm tracking-[2px] text-[#2C2825] uppercase leading-tight">{product.name}</p>
        <p className="text-[#C5A46E] text-sm">${product.price}</p>
      </div>
    </Link>
  );
}
