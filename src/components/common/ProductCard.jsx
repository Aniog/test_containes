import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';
import { getSchemaData } from '@/api/products';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  const data = getSchemaData(product);

  return (
    <div
      className="group relative flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-stone-50">
        <img
          src={data.mainImage}
          alt={data.name}
          className={cn(
            'w-full h-full object-cover transition-transform duration-700 ease-out',
            isHovered ? 'scale-110 opacity-0' : 'scale-100 opacity-100'
          )}
        />
        {data.hoverImage && (
          <img
            src={data.hoverImage}
            alt={`${data.name} alternate`}
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out',
              isHovered ? 'scale-105 opacity-100' : 'scale-100 opacity-0'
            )}
          />
        )}
        
        {/* Quick Add (Desktop only) */}
        <div
          className={cn(
            'absolute inset-x-0 bottom-0 p-4 transform transition-transform duration-300 translate-y-full group-hover:translate-y-0 hidden md:block',
            'bg-background/80 backdrop-blur-sm'
          )}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product, data.variants?.[0] || 'Gold');
            }}
            className="w-full bg-primary text-white py-3 text-[10px] tracking-widest uppercase flex items-center justify-center space-x-2 hover:bg-accent transition-colors"
          >
            <ShoppingBag size={14} />
            <span>Quick Add</span>
          </button>
        </div>
      </Link>

      {/* Product Info */}
      <div className="mt-6 flex flex-col items-center text-center space-y-2">
        <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
          {data.category}
        </p>
        <h3 className="text-sm font-medium tracking-[0.15em] uppercase px-4 leading-relaxed group-hover:text-accent transition-colors">
          <Link to={`/product/${product.id}`}>{data.name}</Link>
        </h3>
        <p className="text-sm font-serif italic text-stone-600">
          ${data.price}
        </p>
      </div>

      {/* Mobile Quick Add Icon */}
      <button
        onClick={() => addToCart(product, data.variants?.[0] || 'Gold')}
        className="md:hidden absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-sm"
      >
        <ShoppingBag size={16} />
      </button>
    </div>
  );
};

export default ProductCard;
