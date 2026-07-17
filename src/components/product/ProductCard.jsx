import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem, openDrawer } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
    openDrawer();
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-background overflow-hidden rounded-sm">
        <img
          src={isHovered ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-opacity duration-500 ease-out"
        />
        <div
          className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ease-out ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="btn-primary w-full text-xs py-2.5"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-3 space-y-1">
        <h3 className="product-name">{product.name}</h3>
        <p className="text-sm text-ink-secondary">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
