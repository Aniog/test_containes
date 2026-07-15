import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { cn } from '../../lib/utils.js';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[#faf9f6]">
        <Link to={'/product/' + product.id}>
          {/* Main Image Cases */}
          <div className={cn(
            "w-full h-full transition-opacity duration-700",
            isHovered ? "opacity-0" : "opacity-100"
          )}>
            {product.imgId === "1" && <img data-strk-img-id="product-img-1" data-strk-img={"[item-name-" + product.id + "] jewelry gold"} data-strk-img-ratio="3x4" data-strk-img-width="600" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={product.name} className="w-full h-full object-cover" />}
            {product.imgId === "2" && <img data-strk-img-id="product-img-2" data-strk-img={"[item-name-" + product.id + "] jewelry gold"} data-strk-img-ratio="3x4" data-strk-img-width="600" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={product.name} className="w-full h-full object-cover" />}
            {product.imgId === "3" && <img data-strk-img-id="product-img-3" data-strk-img={"[item-name-" + product.id + "] jewelry gold"} data-strk-img-ratio="3x4" data-strk-img-width="600" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={product.name} className="w-full h-full object-cover" />}
            {product.imgId === "4" && <img data-strk-img-id="product-img-4" data-strk-img={"[item-name-" + product.id + "] jewelry gold"} data-strk-img-ratio="3x4" data-strk-img-width="600" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={product.name} className="w-full h-full object-cover" />}
            {product.imgId === "5" && <img data-strk-img-id="product-img-5" data-strk-img={"[item-name-" + product.id + "] jewelry gold"} data-strk-img-ratio="3x4" data-strk-img-width="600" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={product.name} className="w-full h-full object-cover" />}
          </div>
          
          {/* Hover Image Cases */}
          <div className={cn(
            "absolute inset-0 transition-opacity duration-700",
            isHovered ? "opacity-100" : "opacity-0"
          )}>
            {product.imgId === "1" && <img data-strk-img-id="product-img-hover-1" data-strk-img={"[item-name-" + product.id + "] worn jewelry"} data-strk-img-ratio="3x4" data-strk-img-width="600" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={product.name} className="w-full h-full object-cover" />}
            {product.imgId === "2" && <img data-strk-img-id="product-img-hover-2" data-strk-img={"[item-name-" + product.id + "] worn jewelry"} data-strk-img-ratio="3x4" data-strk-img-width="600" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={product.name} className="w-full h-full object-cover" />}
            {product.imgId === "3" && <img data-strk-img-id="product-img-hover-3" data-strk-img={"[item-name-" + product.id + "] worn jewelry"} data-strk-img-ratio="3x4" data-strk-img-width="600" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={product.name} className="w-full h-full object-cover" />}
            {product.imgId === "4" && <img data-strk-img-id="product-img-hover-4" data-strk-img={"[item-name-" + product.id + "] worn jewelry"} data-strk-img-ratio="3x4" data-strk-img-width="600" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={product.name} className="w-full h-full object-cover" />}
            {product.imgId === "5" && <img data-strk-img-id="product-img-hover-5" data-strk-img={"[item-name-" + product.id + "] worn jewelry"} data-strk-img-ratio="3x4" data-strk-img-width="600" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={product.name} className="w-full h-full object-cover" />}
          </div>
        </Link>

        {/* Quick Add Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          className={cn(
            "absolute bottom-0 left-0 w-full bg-white text-black font-sans uppercase tracking-widest text-xs py-4 transition-transform duration-500 ease-out",
            isHovered ? "translate-y-0" : "translate-y-full"
          )}
        >
          Quick Add +
        </button>
      </div>

      <div className="mt-4 flex flex-col items-center text-center">
        <Link to={'/product/' + product.id}>
          <h3 id={'item-name-' + product.id} className="font-serif uppercase tracking-widest text-sm mb-1 group-hover:opacity-70 transition-opacity">
            {product.name}
          </h3>
        </Link>
        <p className="font-sans text-sm text-gray-400 mb-1 uppercase tracking-widest text-[10px]">
          {product.category}
        </p>
        <p className="font-sans text-sm font-medium underline decoration-accent transition-all">
          {'$' + product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
