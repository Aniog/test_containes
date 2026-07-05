import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to bag`);
  };

  return (
    <div className="group flex flex-col h-full bg-white">
      <Link 
        to={`/product/${product.id}`}
        className="relative aspect-[3/4] overflow-hidden bg-[#fafafa] block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={isHovered ? product.hoverImage : product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        
        {/* Quick Add Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
          <button 
            onClick={handleAddToCart}
            className="w-full bg-white/90 backdrop-blur-sm text-black py-3 text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition-all transform hover:scale-[1.02]"
          >
            Quick Add
          </button>
        </div>
      </Link>
      
      <div className="pt-5 pb-3 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-[11px] uppercase tracking-[0.2em] font-medium leading-relaxed max-w-[80%]">
            <Link to={`/product/${product.id}`} className="hover:opacity-60 transition-opacity">
              {product.name}
            </Link>
          </h3>
          <span className="text-[11px] tracking-wider text-muted-foreground">${product.price}</span>
        </div>
        <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-auto opacity-70">
          {product.category}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
