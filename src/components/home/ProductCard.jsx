import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product, 'gold');
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-brand-warm">
        <img
          src={hovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button
            onClick={handleAdd}
            className="flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-brand-ink shadow-sm hover:bg-white"
          >
            <ShoppingBag className="h-4 w-4" />
            {added ? 'Added' : 'Add to Cart'}
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-serif text-base text-brand-ink uppercase tracking-wide">{product.name}</h3>
        <p className="mt-1 text-sm text-brand-muted">${product.price}</p>
        <div className="mt-2 flex items-center gap-1 text-brand-accent">
          <Star className="h-3.5 w-3.5 fill-current" />
          <span className="text-xs font-medium text-brand-ink">{product.rating}</span>
          <span className="text-xs text-brand-subtle">({product.reviewCount})</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;