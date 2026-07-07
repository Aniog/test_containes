import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { formatPrice } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';

export function ProductCard({ product }) {
  const { addToCart } = useCart();
  const fields = product.data;
  const imgId = "product-img-" + product.id;
  const titleId = "product-title-" + product.id;
  const categoryId = "product-category-" + product.id;
  const imgQuery = "[" + titleId + "] [" + categoryId + "]";

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block overflow-hidden bg-[#F3F3F3] aspect-[2/3]">
        <img
          data-strk-img-id={imgId}
          data-strk-img={imgQuery}
          data-strk-img-ratio="2x3"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={fields.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Hover overlay for quick add */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/10 backdrop-blur-sm">
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product, fields.variants?.[0] || 'Gold Tone');
            }}
            className="w-full bg-[#1A1A1A] text-white py-3 text-[10px] uppercase tracking-[0.2em] hover:bg-[#C5A059] transition-colors"
          >
            Quick Add to Bag
          </button>
        </div>
      </Link>
      
      <div className="mt-6 text-center">
        <p id={categoryId} className="text-[10px] text-gray-400 uppercase tracking-widest mb-2">
          {fields.category}
        </p>
        <h3 id={titleId} className="font-serif text-sm uppercase tracking-[0.15em] mb-2 group-hover:text-[#C5A059] transition-colors">
          <Link to={`/product/${product.id}`}>
            {fields.name}
          </Link>
        </h3>
        <p className="text-sm font-light text-gray-600">
          {formatPrice(fields.price)}
        </p>
      </div>
    </div>
  );
}
