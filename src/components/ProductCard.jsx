import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import StarRating from './StarRating';

export default function ProductCard({ product, image }) {
  const { addItem } = useCart();

  const handleQuickAdd = e => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold', 1);
  };

  return (
    <article className="group relative flex flex-col">
      <div className="relative block overflow-hidden bg-warm-gray">
        <Link to={`/product/${product.id}`} className="block">
          <div className="aspect-[4/5] w-full">{image}</div>
        </Link>
        <button
          type="button"
          onClick={handleQuickAdd}
          className="absolute bottom-4 left-4 right-4 flex translate-y-0 items-center justify-center gap-2 bg-cream/95 py-3 text-xs font-medium uppercase tracking-widest text-espresso opacity-100 shadow-card backdrop-blur-sm transition-all duration-300 group-hover:bg-gold group-hover:text-cream"
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag size={14} />
          Quick Add
        </button>
      </div>
      <div className="pt-4">
        <div className="mb-1.5 flex items-center gap-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[11px] text-taupe">({product.reviewCount})</span>
        </div>
        <h3
          id={product.titleId}
          className="font-serif text-sm font-medium uppercase tracking-widest text-espresso"
        >
          <Link to={`/product/${product.id}`} className="hover:text-gold transition-colors">
            {product.name}
          </Link>
        </h3>
        <p id={product.descId} className="sr-only">
          {product.description}
        </p>
        <p className="mt-1 font-sans text-sm font-medium text-taupe">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </article>
  );
}
