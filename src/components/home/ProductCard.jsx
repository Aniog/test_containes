import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block no-underline">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-brand-ivory overflow-hidden">
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Hover overlay with Add to Cart */}
          <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product);
              }}
              className="w-full py-3 bg-brand-charcoal/90 text-brand-cream font-sans text-[10px] uppercase tracking-wide-xl hover:bg-brand-charcoal transition-colors border-none cursor-pointer backdrop-blur-sm"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product info */}
        <div className="mt-4">
          <h3
            id={product.titleId}
            className="font-sans text-[11px] uppercase tracking-product text-brand-charcoal"
          >
            {product.name}
          </h3>
          <p id={product.descId} className="sr-only">{product.description}</p>
          <div className="flex items-center gap-2 mt-1.5">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-brand-gold text-brand-gold' : 'text-brand-sand'}`}
                />
              ))}
            </div>
            <span className="text-[10px] text-brand-muted">({product.reviewCount})</span>
          </div>
          <p className="mt-1.5 font-sans text-sm text-brand-charcoal">${product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
