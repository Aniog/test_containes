import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative rounded-2xl bg-white p-3 transition-shadow hover:shadow-lg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-background">
          <img
            src={hovered ? product.images[1] : product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {product.badge && (
            <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-ink">
              {product.badge}
            </span>
          )}
        </div>
        <div className="mt-3 px-1">
          <h3 className="font-serif text-sm uppercase tracking-wide text-ink">{product.name}</h3>
          <p className="mt-1 text-sm text-muted">${product.price}</p>
        </div>
      </Link>
      <button
        type="button"
        onClick={() => addItem(product, product.material)}
        className="mt-3 w-full rounded-full bg-ink/90 px-4 py-2 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
