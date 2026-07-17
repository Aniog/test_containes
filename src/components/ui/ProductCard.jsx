import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

export default function ProductCard({ product, className }) {
  const { addToCart } = useCart();
  const fields = product.data || product;
  const imageUrl = fields.images?.[0] || 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800';
  const hoverImageUrl = fields.images?.[1] || imageUrl;

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, fields.variants?.[0] || 'Gold');
    toast.success(`${fields.name} added to bag`);
  };

  return (
    <div className={cn("group block", className)}>
      <Link to={`/product/${product.id}`} className="relative block overflow-hidden bg-[#FAF9F6]">
        {/* Placeholder for real images */}
        <div className="aspect-[3/4] overflow-hidden relative">
          <img 
            src={imageUrl} 
            alt={fields.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Hover Reveal Image - in a real app this would be a second image */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
             <img 
              src={hoverImageUrl} 
              alt={fields.name} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quick Add Button */}
          <button 
            onClick={handleQuickAdd}
            className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm text-black py-4 text-[10px] tracking-[0.2em] uppercase font-bold translate-y-full group-hover:translate-y-0 transition-transform duration-500 hover:bg-primary hover:text-white"
          >
            Quick Add
          </button>
        </div>
      </Link>

      <div className="pt-6 flex flex-col items-center text-center">
        <h3 className="text-xs tracking-[0.2em] font-medium uppercase mb-2 font-serif text-gray-800">
          <Link to={`/product/${product.id}`}>{fields.name}</Link>
        </h3>
        <p className="text-sm font-light tracking-tight text-gray-400">
          ${fields.price?.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
