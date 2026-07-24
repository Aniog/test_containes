import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Button from './Button';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 'gold', 1);
  };

  const primaryImage = product.images?.[0]?.url || 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80';
  const secondaryImage = product.images?.[1]?.url || primaryImage;

  return (
    <Link to={`/product/${product.slug}`} className="product-card group block">
      <div className="product-image-container aspect-[4/3.5] mb-4 relative">
        <img 
          src={primaryImage} 
          alt={product.name}
          className="product-image product-image-primary absolute inset-0 w-full h-full object-cover"
        />
        <img 
          src={secondaryImage} 
          alt={product.name}
          className="product-image product-image-secondary absolute inset-0 w-full h-full object-cover opacity-0"
        />
        
        {showQuickAdd && (
          <div className="quick-add">
            <Button 
              variant="accent" 
              className="text-xs py-2.5 px-6 shadow-lg"
              onClick={handleQuickAdd}
            >
              Quick Add
            </Button>
          </div>
        )}
      </div>

      <div className="px-1">
        <p className="product-name text-sm tracking-widest text-[#2C2825] mb-1 group-hover:text-[#B89778] transition-colors">
          {product.name}
        </p>
        <p className="text-sm text-[#6B645C] mb-1">{product.category}</p>
        <p className="font-medium text-[#2C2825]">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
