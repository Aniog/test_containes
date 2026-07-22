import React, { useState } from 'react';
import { Star, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onQuickAdd }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative bg-white"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block aspect-[3/4] overflow-hidden bg-brand-warm">
        <img
          src={hovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition-opacity duration-500"
        />
      </Link>

      <div className="mt-4 space-y-1.5">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-sm font-medium uppercase tracking-wide text-brand-ink hover:text-brand-accent transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-1.5">
          <Star className="h-3.5 w-3.5 fill-brand-gold text-brand-gold" />
          <span className="text-xs text-brand-muted">{product.rating} ({product.reviewCount})</span>
        </div>
        <p className="text-sm font-medium text-brand-ink">${product.price}</p>
      </div>

      <button
        onClick={() => onQuickAdd(product)}
        className="absolute bottom-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-brand-line px-3 py-2 text-xs font-semibold uppercase tracking-widest text-brand-ink opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-brand-accent hover:text-white hover:border-brand-accent"
        aria-label={`Add ${product.name} to cart`}
      >
        <ShoppingBag className="h-3.5 w-3.5" />
        Add
      </button>
    </div>
  );
};

export default ProductCard;
