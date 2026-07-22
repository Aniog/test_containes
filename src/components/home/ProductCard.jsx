import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.tone || 'gold');
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-brand-warm aspect-[3/4]">
        <div className="absolute inset-0 flex items-center justify-center text-brand-subtle text-xs tracking-widest uppercase">
          {hovered ? 'Second Image' : 'Primary Image'}
        </div>
        <div
          className={`absolute inset-x-0 bottom-0 flex items-center justify-center pb-4 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="rounded-full bg-white/90 px-5 py-2 text-xs font-semibold text-brand-ink shadow-sm hover:bg-white"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-4">
        <p className="font-serif text-base text-brand-ink">{product.name}</p>
        <p className="mt-1 text-sm text-brand-muted">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
