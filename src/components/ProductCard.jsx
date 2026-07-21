import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to bag!`, {
      style: {
        background: 'var(--background)',
        color: 'var(--foreground)',
        border: '1px border var(--border)'
      }
    });
  };

  return (
    <div 
      className="group relative flex flex-col space-y-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="relative aspect-[3/4] overflow-hidden bg-muted block">
        <img 
          data-strk-img-id={`product-${product.id}-main`}
          data-strk-img={`[product-desc-${product.id}] [product-title-${product.id}] model wearing luxury gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${isHovered ? 'scale-105 opacity-0' : 'scale-100 opacity-100'}`}
        />
        <img 
          data-strk-img-id={`product-${product.id}-hover`}
          data-strk-img={`[product-desc-${product.id}] close up luxury gold ${product.category}`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={`${product.name} alternative view`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${isHovered ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}
        />
        
        {/* Quick Add Button */}
        <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Button 
            onClick={handleAddToCart}
            className="w-full bg-background/90 text-foreground hover:bg-accent hover:text-accent-foreground backdrop-blur-sm shadow-lg rounded-none py-6 border-none text-[10px] tracking-[0.2em] font-bold"
          >
            QUICK ADD
          </Button>
        </div>
      </Link>
      
      <div className="flex flex-col space-y-1 text-center md:text-left">
        <Link to={`/product/${product.id}`}>
          <h3 id={`product-title-${product.id}`} className="text-xs font-serif tracking-[0.15em] hover:text-accent transition-colors uppercase">
            {product.name}
          </h3>
        </Link>
        <p id={`product-desc-${product.id}`} className="hidden">{product.description}</p>
        <p className="text-xs font-medium text-muted-foreground">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
