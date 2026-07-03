import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-background">
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {hovered && product.images[1] && (
            <img
              src={product.images[1]}
              alt={product.name}
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
            />
          )}
          {product.badge && (
            <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-ultra text-ink">
              {product.badge}
            </span>
          )}
        </div>
        <div className="mt-4 space-y-1">
          <p className="text-xs font-semibold uppercase tracking-ultra text-ink">{product.name}</p>
          <p className="text-sm text-ink-secondary">${product.price}</p>
        </div>
      </Link>

      <button
        type="button"
        onClick={() => addItem(product, product.variants[0])}
        className="absolute bottom-20 right-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink shadow-sm transition-all hover:bg-ink hover:text-white md:opacity-0 md:group-hover:opacity-100"
        aria-label={`Add ${product.name} to cart`}
      >
        <ShoppingBag className="h-4 w-4" />
      </button>
    </div>
  );
};

export default ProductCard;
