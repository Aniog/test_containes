import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold');
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-velmora-warm overflow-hidden mb-4">
        {/* Primary Image */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
          data-strk-bg-id={`card-primary-${product.id}`}
          data-strk-bg={`[${product.id}-subtitle] [${product.id}-title]`}
          data-strk-bg-ratio="3x4"
          data-strk-bg-width="600"
        />

        {/* Secondary Image (hover) */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          data-strk-bg-id={`card-secondary-${product.id}`}
          data-strk-bg={`[${product.id}-subtitle] [${product.id}-title] lifestyle`}
          data-strk-bg-ratio="3x4"
          data-strk-bg-width="600"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-velmora-base/80 text-velmora-cream text-[10px] tracking-ultra-wide uppercase px-3 py-1.5">
            {product.badge}
          </span>
        )}

        {/* Quick Add Button */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-3 left-3 right-3 bg-velmora-base/90 text-velmora-cream py-2.5 text-xs tracking-ultra-wide uppercase font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <ShoppingBag size={14} />
          Add to Bag
        </button>
      </div>

      {/* Product Info */}
      <div id={`${product.id}-title`} className="font-serif text-sm tracking-wide text-velmora-base group-hover:text-velmora-gold-dark transition-colors">
        {product.name}
      </div>
      <p id={`${product.id}-subtitle`} className="text-xs text-velmora-stone mt-1">{product.subtitle}</p>

      {/* Rating & Price */}
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-1">
          <Star size={12} className="text-velmora-gold fill-velmora-gold" />
          <span className="text-xs text-velmora-stone">{product.rating}</span>
          <span className="text-xs text-velmora-stone-light">({product.reviews})</span>
        </div>
        <span className="text-sm font-medium text-velmora-base">${product.price}</span>
      </div>
    </Link>
  );
};

export default ProductCard;
