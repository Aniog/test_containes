import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`Added ${product.name} to bag`);
  };

  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-[3/4] bg-[#FAF9F6] mb-4 relative overflow-hidden transition-all duration-700 ease-out group-hover:shadow-lg">
          {/* First Image */}
          <img 
            alt={product.name}
            data-strk-img-id={product.imgId}
            data-strk-img={`[product-${product.id}-desc] [product-${product.id}-name]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out",
              isHovered ? "opacity-0" : "opacity-100"
            )}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          
          {/* Hover Image */}
          <img 
            alt={`${product.name} alternative`}
            data-strk-img-id={product.img2Id}
            data-strk-img={`jewelry worn on model [product-${product.id}-name]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out scale-105 group-hover:scale-100",
              isHovered ? "opacity-100" : "opacity-0"
            )}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />

          {/* Quick Add To Cart */}
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-white/20 backdrop-blur-sm border-t border-white/30 hidden md:block">
            <button 
              onClick={handleAddToCart}
              className="w-full py-3 bg-black text-white text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-3 h-3" /> Quick Add
            </button>
          </div>
          
          {/* Mobile Add to Cart Icon */}
          <div className="absolute top-4 right-4 md:hidden">
             <button 
              onClick={handleAddToCart}
              className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-sm"
             >
                <ShoppingBag className="w-4 h-4 text-black" />
             </button>
          </div>
        </div>

        <div className="text-center space-y-1">
          <h3 id={`product-${product.id}-name`} className="text-sm font-serif uppercase tracking-widest text-[#1A1A1A]">
            {product.name}
          </h3>
          <p id={`product-${product.id}-desc`} className="hidden">{product.description}</p>
          <p className="text-sm text-neutral-500">$${product.price}.00</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
