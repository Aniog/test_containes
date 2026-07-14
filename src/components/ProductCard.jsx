import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { toast } from 'sonner';

const ProductCard = ({ product, onAddToCart }) => {
  const handleQuickAdd = (e) => {
    e.preventDefault();
    onAddToCart(product, 'Gold');
    toast.success(`${product.name} added to cart`);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card block group">
      <div className="product-image-container bg-[#F0EBE3]">
        <img 
          src={product.images.primary} 
          alt={product.name}
          className="product-image primary"
        />
        <img 
          src={product.images.secondary} 
          alt={product.name}
          className="product-image secondary"
        />
        <button 
          onClick={handleQuickAdd}
          className="quick-add btn btn-primary text-xs px-8 py-3"
        >
          Quick Add
        </button>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-1 mb-1.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} className="fill-[#C5A26F] text-[#C5A26F]" />
          ))}
          <span className="text-xs text-[#6B6B6B] ml-1">({product.reviews})</span>
        </div>
        <div className="product-name text-sm tracking-[0.1em] mb-1 pr-8">{product.name}</div>
        <div className="text-sm text-[#6B6B6B]">${product.price}</div>
      </div>
    </Link>
  );
};

export default ProductCard;