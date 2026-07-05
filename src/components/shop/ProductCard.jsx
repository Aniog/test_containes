import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../lib/CartContext';
import { toast } from 'sonner';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const idValue = product.id;

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product, product.variants?.[0] || 'Gold Tone');
    toast.success(`${product.name} added to bag`);
  };

  return (
    <Link to={`/product/${idValue}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-5">
        {/* Primary Image */}
        <img
          data-strk-img-id={`product-${idValue}-main`}
          data-strk-img={`[product-name-${idValue}] gold demi-fine jewelry studio shot`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Hover Image */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <img
            data-strk-img-id={`product-${idValue}-hover`}
            data-strk-img={`[product-name-${idValue}] worn on model gold demi-fine jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            alt={`${product.name} lifestyle`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Quick Add Button */}
        <button 
          onClick={handleAddToCart}
          className="absolute bottom-0 left-0 right-0 bg-[#1A1A1A]/80 text-white py-4 uppercase tracking-[0.2em] text-[10px] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 backdrop-blur-sm flex items-center justify-center gap-2"
        >
          <ShoppingBag size={14} /> Quick Add
        </button>
      </div>

      <div className="space-y-1.5 text-center">
        <h3 id={`product-name-${idValue}`} className="font-serif text-sm tracking-widest uppercase group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground font-medium">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
