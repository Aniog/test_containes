import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.tone === 'both' ? 'gold' : product.tone);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-cream-dark mb-4">
        {/* Primary image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Secondary image on hover */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Quick add button */}
        {showQuickAdd && (
          <div
            className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
          >
            <button
              onClick={handleQuickAdd}
              className="w-full py-3 bg-base/90 backdrop-blur-sm text-cream text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-gold transition-colors duration-300"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Bag
            </button>
          </div>
        )}

        {/* Bestseller badge */}
        {product.isBestseller && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-gold text-white text-xs tracking-widest uppercase">
              Bestseller
            </span>
          </div>
        )}
      </div>

      {/* Product info */}
      <div className="space-y-2">
        <h3 className="font-serif text-lg text-base group-hover:text-gold transition-colors duration-300">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <Star className="w-3.5 h-3.5 fill-gold text-gold" />
            <span className="text-xs text-base/60 ml-1">{product.rating}</span>
          </div>
          <span className="text-xs text-base/40">({product.reviewCount})</span>
        </div>
        <p className="font-medium text-base">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;