import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-parchment overflow-hidden rounded-sm">
          <img
            data-strk-img-id={product.imageId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Hover overlay with quick add */}
          <div
            className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ${
              hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                addItem(product, 1, 'gold');
              }}
              className="w-full py-2.5 bg-cream/95 backdrop-blur-sm text-espresso text-xs tracking-widest font-medium uppercase hover:bg-espresso hover:text-cream transition-colors shadow-sm"
            >
              <span className="flex items-center justify-center gap-2">
                <ShoppingBag className="w-3.5 h-3.5" />
                Add to Cart
              </span>
            </button>
          </div>
        </div>
      </Link>

      <div className="mt-3 text-center">
        <Link to={`/product/${product.id}`}>
          <h3
            id={product.titleId}
            className="font-serif text-sm tracking-wide text-espresso hover:text-gold transition-colors"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="sr-only">
          {product.description}
        </p>
        <div className="flex items-center justify-center gap-1.5 mt-1.5">
          <div className="flex items-center">
            <Star className="w-3 h-3 fill-gold text-gold" />
            <span className="text-xs text-stone ml-0.5">{product.rating}</span>
          </div>
          <span className="text-border-dark">|</span>
          <span className="text-sm font-medium text-espresso">
            ${product.price}
          </span>
        </div>
      </div>
    </div>
  );
}
