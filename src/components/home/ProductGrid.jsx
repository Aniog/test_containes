import React from 'react';
import { Plus } from 'lucide-react';
import { useCartStore } from '@/lib/cart-store';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { addItem } = useCartStore();
  const fields = product.data || product;

  return (
    <div className="group space-y-4">
      <div className="relative aspect-[3/4] bg-secondary overflow-hidden">
        {/* Main Image */}
        <img 
          src={fields.images?.[0]} 
          alt={fields.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Hover Overlay - Quick Add */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button 
            onClick={(e) => {
              e.preventDefault();
              addItem(product, fields.variants?.[0] || 'Gold');
            }}
            className="w-full bg-background/90 text-foreground py-3 uppercase tracking-widest text-xs flex items-center justify-center space-x-2 hover:bg-primary hover:text-white transition-colors"
          >
            <Plus size={14} />
            <span>Add to Cart</span>
          </button>
        </div>

        {fields.isBestseller && (
          <span className="absolute top-4 left-4 bg-primary text-white text-[10px] uppercase tracking-widest px-2 py-1">
            Bestseller
          </span>
        )}
      </div>

      <div className="text-center space-y-1">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-xs uppercase tracking-[0.2em] font-medium hover:text-primary transition-colors">
            {fields.name}
          </h3>
        </Link>
        <p className="text-sm font-light text-muted-foreground">${fields.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
