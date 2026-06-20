import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product, index = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold', 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-base-muted mb-4">
        {/* Primary image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          } ${isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'}`}
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

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-gold text-base text-xs px-3 py-1 tracking-widest uppercase font-medium">
            {product.badge}
          </span>
        )}

        {/* Quick add button */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent transition-all duration-300 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full py-3 bg-gold text-base font-medium tracking-widest uppercase text-sm hover:bg-gold-light transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag size={16} />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="space-y-2">
        <h3 className="font-serif text-lg text-cream group-hover:text-gold transition-colors uppercase tracking-wider">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <Star size={14} className="text-gold fill-gold" />
            <span className="text-sm text-cream ml-1">{product.rating}</span>
          </div>
          <span className="text-ink-muted text-sm">({product.reviewCount})</span>
        </div>
        <p className="font-serif text-xl text-gold">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
