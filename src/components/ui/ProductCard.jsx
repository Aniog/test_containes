import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext.jsx';
import StarRating from './StarRating.jsx';
import { StockImage } from './StockImage.jsx';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);

  return (
    <article
      ref={cardRef}
      className="group relative flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/products/${product.id}`} className="relative aspect-[3/4] overflow-hidden bg-surface">
        <StockImage
          id={`product-${product.id}-primary`}
          query={`[product-${product.id}-name]`}
          ratio="3x4"
          width="600"
          alt={product.name}
          className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          containerRef={cardRef}
        />
        <div
          className={`absolute inset-0 bg-black/10 transition-opacity duration-500 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            addToCart(product, 1, product.tone[0]);
          }}
          className={`absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 bg-foreground py-3 text-xs font-medium uppercase tracking-widest text-background transition-all duration-400 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
          }`}
        >
          <Plus size={14} /> Add to Cart
        </button>
      </Link>

      <div className="mt-4 flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[10px] uppercase tracking-wider text-muted">
            ({product.reviewCount})
          </span>
        </div>
        <h3
          id={`product-${product.id}-name`}
          className="font-serif text-sm uppercase tracking-widest-xl text-foreground"
        >
          <Link to={`/products/${product.id}`} className="hover:text-accent transition-colors">
            {product.name}
          </Link>
        </h3>
        <p className="text-sm font-light text-muted">${product.price}</p>
      </div>
    </article>
  );
}
