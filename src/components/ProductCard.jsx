import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Check } from 'lucide-react';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const [justAdded, setJustAdded] = useState(false);
  const { addToCart } = useCart();

  const hasSecondaryImage = product.images && product.images.length > 1;

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant, 1);
    setJustAdded(true);
    // Reset the "added" state after 1.5 seconds
    setTimeout(() => setJustAdded(false), 1500);
  };

  return (
    <Link to={`/product/${product.slug}`} className="product-card block group">
      <div className="product-card-image">
        <img 
          src={product.images[0]} 
          alt={product.name}
          loading="lazy"
        />
        {hasSecondaryImage && (
          <div className="product-card-image-secondary">
            <img 
              src={product.images[1]} 
              alt={`${product.name} - alternate view`}
              loading="lazy"
            />
          </div>
        )}
        
        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            className={`product-card-quick-add btn btn-sm transition-all ${justAdded ? 'btn-primary' : 'btn-accent'}`}
            disabled={justAdded}
          >
            {justAdded ? (
              <span className="flex items-center gap-1.5">
                <Check size={14} /> Added
              </span>
            ) : (
              'Add to Cart'
            )}
          </button>
        )}
      </div>

      <div className="product-card-info">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-price">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;