import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Plus } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] bg-[#F5F2ED] overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* Secondary Image (hover) */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm text-[#2D2926] px-5 py-2.5 text-xs uppercase tracking-wider font-medium flex items-center gap-2 transition-all duration-300 hover:bg-[#C9A962] hover:text-white ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <Plus className="w-3 h-3" />
          Quick Add
        </button>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isBestseller && (
            <span className="bg-[#2D2926] text-white text-[9px] uppercase tracking-wider px-2 py-1">
              Bestseller
            </span>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="product-name text-[11px] mb-2 group-hover:text-[#C9A962] transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center justify-center gap-1.5 mb-2">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-3 h-3"
                fill={i < Math.floor(product.rating) ? '#C9A962' : 'none'}
                stroke={i < Math.floor(product.rating) ? '#C9A962' : '#D5D0C8'}
              />
            ))}
          </div>
          <span className="text-[10px] text-[#9A9590]">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <p className="font-medium text-[#2D2926]">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}
