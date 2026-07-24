import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-surface-alt">
          <img
            src={hovered ? product.images[1] : product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="rounded-full bg-white/90 px-4 py-2 font-ui text-xs font-semibold uppercase tracking-display text-ink backdrop-blur-sm">
              Quick View
            </span>
          </div>
        </div>
        <div className="mt-4">
          <p className="font-display text-sm font-semibold uppercase tracking-display text-ink">
            {product.name}
          </p>
          <p className="mt-1 font-ui text-sm text-ink-secondary">${product.price}</p>
        </div>
      </Link>

      <button
        onClick={() => addItem(product, 'gold')}
        className="absolute bottom-20 right-3 rounded-full bg-white/90 p-2.5 text-ink shadow-sm opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-accent hover:text-white"
        aria-label={`Add ${product.name} to cart`}
      >
        <ShoppingBag className="h-4 w-4" />
      </button>
    </div>
  );
};

export default ProductCard;
