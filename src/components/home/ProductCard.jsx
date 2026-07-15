import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { dispatch } = useCart();
  const defaultVariant = product.variants[0];

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        variant: defaultVariant,
      },
    });
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-warm overflow-hidden mb-4">
        <img
          alt={product.name}
          data-strk-img-id={product.imgIds[defaultVariant][0]}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Quick Add to Cart — appears on hover */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-4 left-4 right-4 bg-cream/95 text-espresso py-3 text-xs tracking-widest uppercase font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Add to Bag
        </button>
      </div>

      {/* Info */}
      <div className="text-center">
        <p
          id={product.titleId}
          className="font-serif text-xs md:text-sm tracking-[0.2em] uppercase text-espresso mb-1.5"
        >
          {product.name}
        </p>
        <div className="flex items-center justify-center gap-1 mb-1.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-sand/40 fill-sand/40'
              }`}
            />
          ))}
          <span className="text-[11px] text-mocha/50 ml-1">({product.ratingCount})</span>
        </div>
        <p className="font-sans text-sm text-espresso font-medium">${product.price}</p>
      </div>
    </Link>
  );
}
