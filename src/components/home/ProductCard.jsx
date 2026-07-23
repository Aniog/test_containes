import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext.jsx';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem, openCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold', 1);
    openCart();
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden rounded-xl bg-brand-warm aspect-[3x4]">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {hovered && product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate`}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          />
        )}
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-brand-ink">
            {product.badge}
          </span>
        )}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 rounded-full bg-white/95 py-2.5 text-xs font-semibold text-brand-ink opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-white"
        >
          <ShoppingBag className="h-3.5 w-3.5" />
          Add to Cart
        </button>
      </div>
      <div className="mt-3 space-y-1">
        <h3 className="font-serif text-base font-semibold text-brand-ink uppercase tracking-wide">{product.name}</h3>
        <div className="flex items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-brand-accent text-brand-accent" />
          <span className="text-xs text-brand-muted">{product.rating} ({product.reviewCount})</span>
        </div>
        <p className="text-sm font-semibold text-brand-ink">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
