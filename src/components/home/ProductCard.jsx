import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem, toggleDrawer } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      variant: product.variants[0],
    });
    toggleDrawer();
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-brand-warm">
        <img
          src={hovered ? product.images[1] : product.images[0]}
          alt={product.name}
          className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-brand-surface/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-brand-ink">
            {product.badge}
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 flex justify-center pb-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button
            type="button"
            onClick={handleAddToCart}
            className="rounded-full bg-brand-ink px-5 py-2 text-xs font-semibold uppercase tracking-widest text-white hover:bg-brand-accent"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-serif text-base font-medium tracking-wide text-brand-ink">{product.name}</h3>
        <p className="mt-1 text-sm text-brand-muted">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
