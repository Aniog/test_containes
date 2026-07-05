import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product, index = 0 }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem, openDrawer } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.tone || 'gold', 1);
    openDrawer();
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden rounded-xl bg-surface border border-border aspect-[3/4]">
        <img
          src={hovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-ink text-white text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full">
            {product.badge}
          </span>
        )}
        <button
          onClick={handleQuickAdd}
          className="absolute bottom-3 right-3 bg-white/90 hover:bg-white text-ink p-2.5 rounded-full shadow-soft transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
          aria-label={`Quick add ${product.name}`}
        >
          <ShoppingBag className="w-4 h-4" />
        </button>
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="font-serif text-base tracking-wide text-ink group-hover:text-gold transition-colors">{product.name}</h3>
        <p className="text-xs text-muted uppercase tracking-widest">{product.category}</p>
        <p className="text-sm font-medium mt-1">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
