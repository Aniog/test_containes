import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem, setCartOpen } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold', 1);
    setCartOpen(true);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-base-100 aspect-[3/4]">
        <img
          src={hovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-velmora group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 flex translate-y-full flex-col gap-2 bg-gradient-to-t from-base-950/70 to-transparent p-4 transition-transform duration-500 ease-velmora group-hover:translate-y-0">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="flex items-center justify-center gap-2 rounded-full bg-white/95 px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-base-900 backdrop-blur-sm transition-colors hover:bg-white"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-3 space-y-1">
        <h3 className="product-name text-xs">{product.name}</h3>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-base-900">${product.price}</p>
          <div className="flex items-center gap-1 text-xs text-base-500">
            <Star className="h-3 w-3 fill-gold-400 text-gold-400" />
            <span>{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
