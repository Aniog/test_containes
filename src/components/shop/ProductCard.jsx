import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 mb-4 h-full">
        <img 
          data-strk-img-id={`product-${product.id}-img-1`}
          data-strk-img={`[product-${product.id}-name] jewelry gold portrait`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src={product.images[0]} 
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out ${isHovered ? 'scale-110 opacity-0' : 'scale-100 opacity-100'}`}
        />
        <img 
          data-strk-img-id={`product-${product.id}-img-2`}
          data-strk-img={`[product-${product.id}-name] luxury jewelry lifestyle`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src={product.images[1] || product.images[0]} 
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out ${isHovered ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}
        />
        
        {/* Quick Add Overlay */}
        <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 translate-y-full group-hover:translate-y-0`}>
          <Button 
            onClick={handleAddToCart}
            className="w-full bg-white/90 backdrop-blur-sm text-primary hover:bg-white rounded-none uppercase tracking-widest text-[10px] py-6 h-auto border border-stone-100 shadow-xl"
          >
            Quick Add
          </Button>
        </div>
      </div>
      
      <div className="flex flex-col items-center text-center">
        <h3 id={`product-${product.id}-name`} className="text-[10px] uppercase tracking-[0.2em] font-bold mb-1 group-hover:opacity-60 transition-opacity text-stone-900">
          {product.name}
        </h3>
        <p className="text-sm text-stone-500 tabular-nums">
          ${product.price ? product.price.toFixed(2) : "0.00"}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
