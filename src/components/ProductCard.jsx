import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import StarRating from './StarRating';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-velmora-creamDark mb-4">
          <img
            src={product.images[0]}
            alt={product.name}
            className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
              isHovered ? 'scale-105' : 'scale-100'
            }`}
          />
          {product.badge && (
            <span className="absolute top-3 left-3 bg-velmora-charcoal text-white text-[10px] font-sans font-medium tracking-widest uppercase px-3 py-1.5">
              {product.badge}
            </span>
          )}
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product, product.variants[0]);
            }}
            className={`absolute bottom-0 left-0 right-0 bg-velmora-charcoal text-white text-xs font-sans font-medium tracking-widest uppercase py-3.5 flex items-center justify-center gap-2 transition-transform duration-400 ease-out ${
              isHovered ? 'translate-y-0' : 'translate-y-full'
            }`}
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>
        <div className="text-center">
          <h3 className="font-serif text-sm tracking-[0.15em] uppercase text-velmora-charcoal mb-1">
            {product.name}
          </h3>
          <p className="font-sans text-xs text-velmora-warmGray mb-2">
            {product.tagline}
          </p>
          <div className="flex items-center justify-center gap-2">
            <StarRating rating={product.rating} size={12} />
            <span className="text-[11px] text-velmora-warmGrayLight">
              ({product.reviews})
            </span>
          </div>
          <p className="font-sans text-sm font-medium text-velmora-charcoal mt-2">
            ${product.price}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
