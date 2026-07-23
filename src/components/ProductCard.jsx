import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [showSecondary, setShowSecondary] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant, 1);
  };

  return (
    <Link to={`/product/${product.slug}`} className="product-card block group">
      <div 
        className="product-card-image"
        onMouseEnter={() => setShowSecondary(true)}
        onMouseLeave={() => setShowSecondary(false)}
      >
        {/* Primary Image Placeholder */}
        <div className="img-placeholder">
          <span>{product.name.split(' ').slice(0, 2).join(' ')}</span>
        </div>
        
        {/* Secondary Image Placeholder (hover state) */}
        <div className={`product-card-image-secondary ${showSecondary ? 'opacity-100' : ''}`}>
          <div className="img-placeholder">
            <span>DETAIL VIEW</span>
          </div>
        </div>

        {/* Quick Add Button */}
        <button 
          onClick={handleQuickAdd}
          className="product-card-quick-add btn btn-sm btn-primary"
        >
          <ShoppingBag className="w-3.5 h-3.5 mr-1.5" />
          QUICK ADD
        </button>
      </div>

      <div className="product-card-info">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-price">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
