import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Button from './Button';

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState('gold');
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedVariant, 1);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card block group">
      <div className="product-card-image">
        <img
          src={product.images.primary}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <img
          src={product.images.secondary}
          alt={product.name}
          className="product-card-image-secondary absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Quick Add Button */}
        <div className="product-card-quick-add">
          <Button
            variant="gold"
            size="sm"
            onClick={handleAddToCart}
            className="bg-white/95 hover:bg-white text-[#B89778] hover:text-[#8C6F52] border-[#B89778] px-6 py-2 text-xs"
          >
            Add to Cart
          </Button>
        </div>
      </div>

      <div className="product-card-info">
        <h3 className="product-card-name text-[#2C2825] group-hover:text-[#B89778] transition-colors">
          {product.name}
        </h3>
        <p className="product-card-price">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;