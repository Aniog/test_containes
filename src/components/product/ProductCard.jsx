import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, showQuickAdd = true }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const availableVariant = product.variants.find((v) => v.available);
    if (availableVariant) {
      addItem(product, availableVariant, 1);
    }
  };

  return (
    <Link
      to={`/products/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-border overflow-hidden mb-3">
        <img
          data-strk-img-id={product.images[0].id}
          data-strk-img={`[product-name-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.images[0].alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {/* Hover image overlay */}
        {hovered && (
          <img
            data-strk-img-id={product.hoverImageId}
            data-strk-img={`[product-name-${product.id}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          />
        )}

        {/* Quick add button */}
        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            className="absolute bottom-3 left-3 right-3 bg-background/95 backdrop-blur-sm py-2.5 flex items-center justify-center gap-2 text-xs uppercase tracking-wide font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-foreground hover:text-background"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Quick Add
          </button>
        )}

        {/* Sale badge */}
        {product.compareAtPrice && (
          <span className="absolute top-3 left-3 bg-accent text-white text-[10px] uppercase tracking-wide px-2 py-1">
            Sale
          </span>
        )}
      </div>

      {/* Info */}
      <div className="space-y-1">
        <p
          id={`product-name-${product.id}`}
          className="text-xs md:text-sm font-medium uppercase tracking-widest text-foreground truncate"
        >
          {product.name}
        </p>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">${product.price}</span>
          {product.compareAtPrice && (
            <span className="text-xs text-muted-light line-through">
              ${product.compareAtPrice}
            </span>
          )}
        </div>
        <div className="flex items-center gap-1">
          <Star className="w-3 h-3 fill-accent text-accent" />
          <span className="text-xs text-muted">{product.rating}</span>
          <span className="text-xs text-muted-light">({product.reviewCount})</span>
        </div>
      </div>
    </Link>
  );
}
