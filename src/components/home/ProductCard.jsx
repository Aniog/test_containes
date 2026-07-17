import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { formatPrice } from '@/lib/utils';
import { toast } from 'sonner';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({ ...product, color: product.colors?.[0] || 'Gold' });
    toast.success(`${product.name} added to cart`);
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative aspect-[3/4] bg-secondary overflow-hidden mb-6">
        <img
          data-strk-img-id={`${product.imgId}-main`}
          data-strk-img="[card-title] gold jewelry editorial clean"
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Hover reveal second image / quick add */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8 p-4">
          <button 
            onClick={handleQuickAdd}
            className="w-full bg-white text-primary flex items-center justify-center space-x-2 py-3 uppercase tracking-widest text-[10px] font-bold shadow-sm translate-y-4 group-hover:translate-y-0 transition-all duration-500"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
      <div className="text-center">
        <h3 id="card-title" className="font-serif uppercase tracking-widest text-sm mb-1 group-hover:opacity-70 transition-opacity">
          {product.name}
        </h3>
        <p className="text-muted text-xs font-medium">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
