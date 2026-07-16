import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group block cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 mb-4 transition-transform duration-500">
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          <img
            alt={product.title}
            data-strk-img-id={product.imgId}
            data-strk-img={`[product-desc-${product.id}] [product-title-${product.id}] gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          />
        </Link>
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-gradient-to-t from-black/50 to-transparent">
          <button 
            className="w-full bg-white text-foreground py-3 text-xs uppercase tracking-widest hover:bg-gold-500 hover:text-white transition-colors cursor-pointer z-10 relative"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(product);
            }}
          >
            Quick Add
          </button>
        </div>
      </div>
      <div className="text-center">
        <h3 id={`product-title-${product.id}`} className="font-serif text-lg uppercase tracking-wide mb-1">
          {product.title}
        </h3>
        <p className="text-stone-500 text-sm">${product.price}</p>
        <p id={`product-desc-${product.id}`} className="hidden">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;