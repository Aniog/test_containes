import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/data/products';
import { StarRating } from './StarRating';
import { StockImage } from './StockImage';

export function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultVariant = product.variants[0].value;
    addToCart(product, defaultVariant, 1);
  };

  return (
    <Link
      to={`/products/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-cream">
        <StockImage
          id={product.images.primary.id}
          ratio="4x5"
          width={600}
          queryParts={product.images.primary.queryParts}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
        />
        {product.images.hover && (
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <StockImage
              id={product.images.hover.id}
              ratio="4x5"
              width={600}
              queryParts={product.images.hover.queryParts}
              alt={`${product.name} alternate view`}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        <button
          type="button"
          onClick={handleQuickAdd}
          className={`absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 bg-paper py-3 text-xs font-medium uppercase tracking-widest text-ink shadow-sm transition-all duration-300 hover:bg-ink hover:text-cream ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
          }`}
        >
          <Plus size={14} />
          Quick Add
        </button>
      </div>

      <div className="mt-4 text-center">
        <StarRating rating={product.rating} size={12} className="justify-center" />
        <h3 className="mt-2 font-sans text-xs font-medium uppercase tracking-wider text-ink">
          {product.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-ink-muted">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
