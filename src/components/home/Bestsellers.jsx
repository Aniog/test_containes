import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { cn } from '@/lib/utils';

export const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  const data = product.data;

  return (
    <div 
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-stone-50 overflow-hidden mb-4 rounded-sm">
        <Link to={`/product/${product.id}`}>
          <img 
            alt={data.name}
            data-strk-img-id={`prod-img-${product.id}`}
            data-strk-img={isHovered && data.images?.[1] ? data.images[1] : data.images?.[0] || `[prod-name-${product.id}] jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            className={cn(
              "w-full h-full object-cover transition-transform duration-700 ease-out",
              isHovered ? "scale-110" : "scale-100"
            )}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          />
        </Link>
        
        {/* Quick Add Button */}
        <div 
          className={cn(
            "absolute bottom-4 inset-x-4 transition-all duration-300 transform",
            isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
          )}
        >
          <button 
            onClick={() => addToCart(product, 1, data.variants?.[0] || 'Gold')}
            className="w-full bg-white text-[#1A1A1A] py-3 text-[10px] uppercase tracking-widest font-bold shadow-lg hover:bg-[#1A1A1A] hover:text-white transition-all flex items-center justify-center space-x-2"
          >
            <ShoppingBag className="w-3 h-3" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>

      <div className="space-y-1">
        <div className="flex justify-between items-start">
          <Link to={`/product/${product.id}`}>
            <h3 
              id={`prod-name-${product.id}`}
              className="text-xs uppercase tracking-[0.2em] font-bold group-hover:text-[#B08D57] transition-colors"
            >
              {data.name}
            </h3>
          </Link>
          <span className="text-sm font-serif">${data.price}</span>
        </div>
        <p className="text-[10px] text-stone-400 uppercase tracking-widest">{data.category}</p>
        <div className="flex items-center space-x-1 pt-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={cn(
                "w-2.5 h-2.5",
                i < Math.floor(data.rating || 0) ? "text-[#B08D57] fill-[#B08D57]" : "text-stone-200"
              )} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Bestsellers = ({ products }) => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#B08D57] mb-4 font-bold">Curated Selection</p>
            <h2 className="text-3xl md:text-4xl font-serif">Bestsellers</h2>
          </div>
          <Link 
            to="/shop"
            className="text-xs uppercase tracking-widest font-bold border-b border-[#1A1A1A] pb-1 hover:text-[#B08D57] hover:border-[#B08D57] transition-all"
          >
            Shop All Jewelry
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-12">
          {products.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
