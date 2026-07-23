import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem, setCartOpen } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold');
    setCartOpen(true);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-surface-muted aspect-[3/4]">
        <img
          src={hovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-ink text-surface text-[10px] font-semibold tracking-widest uppercase px-3 py-1.5">
            {product.badge}
          </span>
        )}
        <div
          className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-500 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full bg-ink text-surface text-[11px] font-semibold tracking-widest uppercase py-3 hover:bg-accent hover:text-ink transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-[11px] font-semibold tracking-widest uppercase text-ink-muted">{product.category}</p>
        <h3 className="font-serif text-lg mt-1 group-hover:text-accent transition-colors duration-300">{product.name}</h3>
        <p className="mt-1 text-sm font-medium">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
