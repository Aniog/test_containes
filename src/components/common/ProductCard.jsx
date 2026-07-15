import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group flex flex-col gap-4">
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-[#F4F1ED] overflow-hidden">
        <Link to={`/product/${product.id}`} className="block h-full w-full">
          {/* Main Image */}
          <img
            data-strk-img-id={`product-${product.id}-main`}
            data-strk-img={`[prod-title-${product.id}] gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          />
          
          {/* Hover Image (Second image from product data) */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
             <img
              data-strk-img-id={`product-${product.id}-hover`}
              data-strk-img={`[prod-title-${product.id}] jewelry on model`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              alt={`${product.name} on model`}
              className="w-full h-full object-cover"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            />
          </div>
        </Link>

        {/* Quick Add Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10">
          <Button
            onClick={() => addToCart(product)}
            className="w-full bg-white text-[#1A1A1A] hover:bg-black hover:text-white border border-transparent shadow-lg"
          >
            QUICK ADD
          </Button>
        </div>

        {/* Badge (Optional) */}
        {product.price > 80 && (
          <div className="absolute top-4 left-4 bg-[#C5A059] text-white text-[10px] px-2 py-1 tracking-widest uppercase">
            Limited Edition
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col items-center text-center gap-1">
        <h3 
          id={`prod-title-${product.id}`}
          className="font-serif text-sm tracking-widest uppercase font-bold"
        >
          {product.name}
        </h3>
        <p className="text-sm font-medium text-[#1A1A1A]">${product.price}</p>
        
        {/* Simple Rating */}
        <div className="flex gap-0.5 mt-1 opacity-40">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={8} fill={i < 4 ? "currentColor" : "none"} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
