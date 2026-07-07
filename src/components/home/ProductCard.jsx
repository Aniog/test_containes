import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold');
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="product-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-card-image">
        <img
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="product-card-overlay" />
      </div>
      <div className="product-card-actions">
        <button
          onClick={handleAddToCart}
          className="w-full btn-primary text-xs py-2.5"
        >
          <ShoppingBag className="w-4 h-4 mr-2" />
          Add to Bag
        </button>
      </div>
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.price}</p>
    </Link>
  );
}
