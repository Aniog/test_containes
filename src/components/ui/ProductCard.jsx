import React from 'react';
import { useCart } from '@/lib/CartContext';
import { ShoppingBag, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <Link to={`/product/${product.id}`} className="group relative block animate-in fade-in duration-700">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-slate-50">
        <img
          data-strk-img-id={`product-card-${product.id}`}
          data-strk-img={`[product-title-${product.id}] luxury gold jewelry product shot`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Quick Actions Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white/20 backdrop-blur-sm flex gap-2">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-white text-black py-3 font-sans text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-colors duration-300"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="mt-6 flex flex-col items-center text-center space-y-2">
        <h3 
          id={`product-title-${product.id}`} 
          className="font-serif text-sm uppercase tracking-[0.2em] text-slate-800 transition-colors group-hover:text-[#C5A059]"
        >
          {product.name}
        </h3>
        <p className="font-sans text-sm text-[#A8A29A]">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
