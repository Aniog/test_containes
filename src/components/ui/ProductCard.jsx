import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext.jsx';
import ProductImage from './ProductImage.jsx';
import StarRating from './StarRating.jsx';

export default function ProductCard({ product, query }) {
  const { addItem } = useCart();

  const titleId = `product-${product.id}-title`;

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1, product.tone.includes('gold') ? 'gold' : product.tone[0]);
  };

  return (
    <div className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-taupe/30">
        <Link to={`/products/${product.id}`} className="absolute inset-0 block">
          <ProductImage
            imgId={`product-card-${product.id}`}
            query={query || `[${titleId}]`}
            ratio="4x5"
            width="600"
            alt={product.name}
            className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {product.hoverImage && (
            <ProductImage
              imgId={`product-card-${product.id}-hover`}
              query={`[${titleId}] detail`}
              ratio="4x5"
              width="600"
              alt={`${product.name} detail`}
              className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
            />
          )}
        </Link>

        {product.new && (
          <span className="pointer-events-none absolute left-3 top-3 bg-cream px-2.5 py-1 text-[10px] uppercase tracking-widest text-ink">
            New
          </span>
        )}

        <button
          type="button"
          onClick={handleQuickAdd}
          className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-center gap-2 bg-ink/90 py-3 text-xs uppercase tracking-widest text-cream backdrop-blur-sm transition-all duration-300 hover:bg-gold"
        >
          <ShoppingBag size={14} />
          Quick Add
        </button>
      </div>

      <Link to={`/products/${product.id}`} className="block text-center">
        <div className="mt-4">
          <StarRating rating={product.rating} size={12} />
          <h3
            id={titleId}
            className="mt-2 font-serif text-sm uppercase tracking-widest text-ink"
          >
            {product.name}
          </h3>
          <p className="mt-1 text-sm font-light text-stone">${product.price}</p>
        </div>
      </Link>
    </div>
  );
}
