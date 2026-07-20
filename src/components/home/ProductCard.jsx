import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 'Gold', 1);
    // Brief visual confirmation; do not auto-open drawer to avoid intercepting click
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card block group">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image product-image-primary"
        />
        {product.imageSecondary && (
          <img
            src={product.imageSecondary}
            alt={product.name}
            className="product-image product-image-secondary"
          />
        )}
        <button
          onClick={handleQuickAdd}
          className={`quick-add btn btn-sm border border-velmora-dark transition-all ${added ? 'bg-velmora-dark text-white' : 'bg-white text-velmora-dark hover:bg-velmora-dark hover:text-white'}`}
          disabled={added}
        >
          {added ? 'Added ✓' : 'Quick Add'}
        </button>
      </div>
      <div className="p-4">
        <h3 className="product-name text-sm tracking-[0.12em] mb-1 pr-2">{product.name}</h3>
        <p className="text-sm text-velmora-muted mb-2">{product.category}</p>
        <p className="font-medium">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
