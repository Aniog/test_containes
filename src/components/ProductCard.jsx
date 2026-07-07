import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    addToCart(product, 'Gold', 1);
    toast.success('Added to cart', {
      description: product.name,
      duration: 2000,
    });
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card block group">
      <div className="product-image-container bg-[#f0ede6]">
        <img 
          src={product.image} 
          alt={product.imageAlt}
          className="product-image primary"
        />
        <img 
          src={product.hoverImage} 
          alt={product.imageAlt}
          className="product-image secondary"
        />
        <button 
          onClick={handleQuickAdd}
          className="quick-add btn-primary text-xs px-6 py-2.5"
        >
          Quick Add
        </button>
      </div>
      <div className="p-5 space-y-1">
        <div className="product-name text-sm tracking-[0.12em] pr-2">{product.name}</div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#6b635e]">{product.category}</span>
          <span className="font-medium">${product.price}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
