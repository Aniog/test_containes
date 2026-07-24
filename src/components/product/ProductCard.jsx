import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      tone: product.tone,
      images: product.images,
    });
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden rounded-sm border border-border bg-background">
        <div className="aspect-[4/5] w-full overflow-hidden">
          <img
            src={hovered ? product.images[1] : product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-surface/90 px-3 py-1 text-[10px] font-semibold tracking-[0.14em] uppercase text-ink border border-border">
            {product.badge}
          </span>
        )}
        <button
          type="button"
          onClick={handleQuickAdd}
          className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white opacity-0 transition-all duration-200 group-hover:opacity-100 hover:bg-accent"
          aria-label="Add to cart"
        >
          <ShoppingBag className="h-4 w-4" />
        </button>
      </div>
      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <p className="product-name">{product.name}</p>
          <p className="mt-1 text-xs text-ink-secondary">{product.category}</p>
        </div>
        <p className="text-sm font-semibold text-ink">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
