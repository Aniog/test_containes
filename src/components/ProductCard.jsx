import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

const ProductCard = ({ product }) => {
  const [showSecondImage, setShowSecondImage] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 'Gold', 1);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card group block">
      <div 
        className="image-container relative aspect-[4/3] bg-[#e5e0d8] mb-4 overflow-hidden"
        onMouseEnter={() => setShowSecondImage(true)}
        onMouseLeave={() => setShowSecondImage(false)}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${showSecondImage ? 'opacity-0' : 'opacity-100'}`}
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${showSecondImage ? 'opacity-100' : 'opacity-0'}`}
          />
        )}
        
        {/* Quick Add Button */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 btn btn-gold text-xs px-6 py-2.5 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          QUICK ADD
        </button>
      </div>
      
      <div className="px-1">
        <div className="product-name text-sm tracking-[0.1em] mb-1 pr-2">{product.name}</div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#6b6763]">{product.category}</span>
          <span className="font-medium">${product.price}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
