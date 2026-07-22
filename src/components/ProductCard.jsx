import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsAdding(true);
    addToCart(product, selectedVariant, 1);
    
    setTimeout(() => {
      setIsAdding(false);
    }, 600);
  };

  // Generate placeholder image URLs using warm gold jewelry aesthetic
  const getImageUrl = (index) => {
    const baseColors = ['F5EDE3', 'EDE4D7', 'D4B99A'];
    const color = baseColors[index % baseColors.length];
    return `https://placehold.co/600x450/${color}/1C1917?text=${encodeURIComponent(product.name.split(' ').slice(0, 2).join(' '))}`;
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card block group">
      <div className="product-card-image">
        <img 
          src={getImageUrl(0)} 
          alt={product.images[0].alt}
          className="product-card-image-primary"
        />
        <img 
          src={getImageUrl(1)} 
          alt={product.images[1].alt}
          className="product-card-image-secondary"
        />
        
        {showQuickAdd && (
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className="product-card-quick-add btn btn-sm bg-white text-[#1C1917] hover:bg-[#B89778] hover:text-white border border-[#1C1917] hover:border-[#B89778]"
          >
            {isAdding ? 'ADDED' : 'ADD TO CART'}
          </button>
        )}
      </div>

      <div className="product-card-info">
        <h3 className="product-card-name text-[#1C1917]">{product.name}</h3>
        <p className="product-card-price">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
