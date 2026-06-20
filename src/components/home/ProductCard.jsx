import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem, setCartOpen } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
    setCartOpen(true);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[var(--color-background)]">
        <img
          src={hovered ? product.images[1] : product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition-opacity duration-500"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 rounded-full bg-[var(--color-surface)] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-ink)]">
            {product.badge}
          </span>
        )}
        <button
          type="button"
          onClick={handleAddToCart}
          className="absolute bottom-3 right-3 rounded-full bg-[var(--color-surface)] p-2.5 text-[var(--color-ink)] shadow-lg opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-[var(--color-accent)] hover:text-white"
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag className="h-4 w-4" />
        </button>
      </div>
      <div className="mt-3 space-y-1">
        <h3 className="text-sm font-medium uppercase tracking-product text-[var(--color-ink)]">{product.name}</h3>
        <div className="flex items-center gap-1.5">
          <Star className="h-3.5 w-3.5 fill-[var(--color-star)] text-[var(--color-star)]" />
          <span className="text-xs text-[var(--color-ink-secondary)]">{product.rating} ({product.reviewCount})</span>
        </div>
        <p className="text-sm font-medium text-[var(--color-ink)]">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
