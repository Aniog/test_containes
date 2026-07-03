import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();
  const primaryImage = product.images.gold[0];
  const secondaryImage = product.images.gold[1] || product.images.gold[0];

  return (
    <article
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden rounded-sm bg-surface-warm">
          <img
            src={hovered ? secondaryImage : primaryImage}
            alt={product.name}
            className="h-[320px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {product.badge && (
            <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-text">
              {product.badge}
            </span>
          )}
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-center pb-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                addItem(product, 'gold');
              }}
              className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-text shadow-sm hover:bg-white"
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <div className="mt-4">
        <h3 className="product-name">{product.name}</h3>
        <p className="mt-1 text-sm text-text-secondary">${product.price.toFixed(2)}</p>
      </div>
    </article>
  );
};

export default ProductCard;
