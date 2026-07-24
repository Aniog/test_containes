import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext.jsx';
import { toast } from 'sonner';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to your bag.`);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group flex flex-col gap-4 animate-in fade-in duration-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[#F2EFED]">
        <img
          data-strk-img-id={`product-${product.id}-img-1`}
          data-strk-img={`[product-${product.id}-title] jewelry gold accessory editorial`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'%3E%3C/svg%3E"
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-1000 ${isHovered ? 'scale-110 opacity-0' : 'scale-100 opacity-100'}`}
        />
        <img
          data-strk-img-id={`product-${product.id}-img-2`}
          data-strk-img={`[product-${product.id}-title] jewelry worn on model editorial`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'%3E%3C/svg%3E"
          alt={`${product.name} worn`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${isHovered ? 'scale-100 opacity-100' : 'scale-105 opacity-0'}`}
        />
        
        {/* Quick Add Button */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm text-foreground py-4 text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-500 transform ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'} hover:bg-primary hover:text-white flex items-center justify-center gap-2`}
        >
          <ShoppingBag size={14} />
          Quick Add
        </button>
      </div>

      <div className="flex flex-col gap-1 items-center md:items-start">
        <h3 id={`product-${product.id}-title`} className="text-[11px] md:text-sm uppercase tracking-[0.2em] font-serif font-medium group-hover:text-primary transition-colors text-center md:text-left">
          {product.name}
        </h3>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-gray-900">${product.price}</span>
          <div className="hidden md:flex items-center gap-1">
            <Star className="w-3 h-3 fill-primary text-primary" />
            <span className="text-[10px] font-bold text-gray-400">4.9</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
