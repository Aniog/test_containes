import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault(); // Prevent navigating to product page
    addToCart(product);
  };

  return (
    <Link 
      to={`/product/${product.id}`} 
      className="group flex flex-col block"
    >
      <div className="relative aspect-[4/5] bg-brand-50 mb-4 overflow-hidden">
        {/* Main Image */}
        <img 
          src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
          data-strk-img-id={product.imgId}
          data-strk-img={`[product-title-${product.id}] minimalist gold jewelry editorial`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 ease-in-out group-hover:opacity-0"
        />
        {/* Hover Image */}
        <img 
          src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
          data-strk-img-id={product.hoverImgId}
          data-strk-img={`[product-title-${product.id}] worn by model close up soft lighting`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          alt={`${product.name} worn`}
          className="absolute inset-0 w-full h-full object-cover object-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
        />
        
        {/* Quick Add Button */}
        <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10">
          <button 
            onClick={handleQuickAdd}
            className="w-full bg-brand-950/90 backdrop-blur-sm text-brand-50 py-3 uppercase tracking-widest text-xs hover:bg-brand-950 transition-colors"
          >
            Quick Add
          </button>
        </div>
      </div>
      
      <div className="flex flex-col items-center text-center px-2">
        <h3 
          className="font-serif uppercase tracking-widest text-sm mb-2 group-hover:text-brand-600 transition-colors"
          id={`product-title-${product.id}`}
        >
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm font-medium border-t border-border/50 pt-2 px-4 w-auto inline-block">
          ${product.price}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
