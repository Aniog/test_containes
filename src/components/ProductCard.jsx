import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import Stars from './ui/Stars';
import Price from './ui/Price';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const { addItem } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const tone = product.tone[0];

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, { tone, quantity: 1 });
  };

  const titleId = `product-title-${product.id}`;
  const descId = `product-desc-${product.id}`;

  return (
    <Link
      to={`/products/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-champagne mb-4">
        <img
          data-strk-img-id={`card-${product.imageIds[tone]}`}
          data-strk-img={`[${descId}] [${titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out-cubic group-hover:scale-105"
        />
        {showQuickAdd && (
          <button
            type="button"
            onClick={handleQuickAdd}
            className={`absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 py-3 bg-white/95 backdrop-blur-sm text-stone-900 font-sans text-xs uppercase tracking-widest font-medium transition-all duration-300 hover:bg-gold-500 hover:text-white ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <ShoppingBag size={16} />
            Quick Add
          </button>
        )}
      </div>
      <div className="space-y-1">
        <Stars rating={product.rating} size={12} />
        <h3
          id={titleId}
          className="font-serif text-base md:text-lg text-stone-900 uppercase tracking-widest"
        >
          {product.name}
        </h3>
        <p id={descId} className="sr-only">
          {product.description}
        </p>
        <Price amount={product.price} className="text-sm" />
      </div>
    </Link>
  );
};

export default ProductCard;
