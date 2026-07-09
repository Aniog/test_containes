import React from 'react';
import { ShoppingBag, Star, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/lib/CartContext';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <div className="group flex flex-col h-full bg-white transition-all duration-500">
      {/* Image Gallery Mockup with Hover Overlay */}
      <div 
        className="relative aspect-[3/4] overflow-hidden bg-[#F9F8F6] cursor-pointer"
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <img
          data-strk-img-id={`prod-main-${product.id}`}
          data-strk-img={`[prod-title-${product.id}] [prod-cat-${product.id}] jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Quick Add Overlay */}
        <div className="absolute inset-0 bg-black/5 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <button 
             onClick={(e) => {
               e.stopPropagation();
               addToCart(product);
             }}
             className="w-full bg-white text-[#1A1A1A] py-3 text-[10px] uppercase tracking-luxury flex items-center justify-center space-x-2 shadow-lg hover:bg-[#FDFCFB] active:scale-95 transition-all"
           >
             <ShoppingBag className="w-3 h-3" />
             <span>Quick Add</span>
           </button>
        </div>
      </div>

      {/* Info */}
      <div className="pt-6 pb-2 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <span id={`prod-cat-${product.id}`} className="text-[10px] text-muted-foreground uppercase tracking-widest">{product.category}</span>
          <div className="flex items-center space-x-1">
             <Star className="w-2.5 h-2.5 fill-[#9D8C70] text-[#9D8C70]" />
             <span className="text-[10px] text-muted-foreground">4.9</span>
          </div>
        </div>
        <h3 
          id={`prod-title-${product.id}`}
          className="text-sm font-serif uppercase tracking-luxury text-[#1A1A1A] mb-2 cursor-pointer hover:opacity-70 transition-opacity"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          {product.name}
        </h3>
        <p className="mt-auto text-sm font-sans text-[#1A1A1A]">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
