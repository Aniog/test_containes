import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { toast } from 'sonner';

const ProductCard = ({ product, onAddToCart }) => {
  const handleQuickAdd = (e) => {
    e.preventDefault();
    onAddToCart(product, 'Gold');
    toast.success(`Added ${product.name} to cart`);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card group block">
      <div className="product-image-container aspect-[4/3] mb-4">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image absolute inset-0 w-full h-full object-cover"
        />
        <img 
          src={product.imageAlt} 
          alt={product.name}
          className="product-image-secondary absolute inset-0 w-full h-full object-cover"
        />
        <button 
          onClick={handleQuickAdd}
          className="quick-add btn-gold text-xs px-6 py-2.5"
        >
          QUICK ADD
        </button>
      </div>
      <div className="px-1">
        <div className="flex items-center gap-1 mb-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} className="fill-[#C5A26F] text-[#C5A26F]" />
          ))}
          <span className="text-xs text-[#8B7E6F] ml-1">({product.reviews})</span>
        </div>
        <div className="product-name text-sm tracking-[0.12em] mb-1">{product.name}</div>
        <div className="text-sm text-[#8B7E6F]">${product.price}</div>
      </div>
    </Link>
  );
};

export default ProductCard;