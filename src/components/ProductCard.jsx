import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import StarRating from './StarRating';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant: product.variants[0],
      quantity: 1,
    });
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-velmora-sand overflow-hidden rounded-sm">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          data-strk-img-id={`product-${product.id}-card`}
          data-strk-img={`[product-name-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span id={`product-name-${product.id}`} className="sr-only">{product.name} {product.category}</span>
        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            className={`absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm text-velmora-charcoal py-2.5 text-xs font-medium tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-300 hover:bg-velmora-charcoal hover:text-white ${
              hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <ShoppingBag size={14} />
            Quick Add
          </button>
        )}
      </div>
      <div className="mt-3 text-center">
        <h3 className="font-serif text-sm tracking-widest uppercase text-velmora-charcoal">
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-2 mt-1.5">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[11px] text-velmora-warmgray">({product.reviewCount})</span>
        </div>
        <p className="text-sm font-medium text-velmora-charcoal mt-1.5">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
