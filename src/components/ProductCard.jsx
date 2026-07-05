import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 'Gold', 1);
    
    // Visual feedback
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card block group">
      <div className="product-image-container aspect-[4/3.5]">
        <img 
          src={product.images?.[0]} 
          alt={product.name}
          className="product-image product-image-primary"
        />
        {product.images?.[1] && (
          <img 
            src={product.images?.[1]} 
            alt={product.name}
            className="product-image product-image-secondary"
          />
        )}
        
        {/* Quick Add Button */}
        <button 
          onClick={handleQuickAdd}
          className={`quick-add btn text-xs py-2.5 px-6 transition-all ${added ? 'btn-primary' : 'btn-gold'}`}
          disabled={added}
        >
          {added ? 'Added ✓' : 'Add to Cart'}
        </button>
      </div>
      
      <div className="pt-4 pb-2 px-1">
        <p className="product-name text-sm tracking-[0.12em] mb-1">{product.name}</p>
        <p className="text-sm text-velmora-text-secondary">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;