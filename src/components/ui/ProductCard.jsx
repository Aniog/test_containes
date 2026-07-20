import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart } from 'lucide-react';
import StarRating from './StarRating';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [liked, setLiked] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[var(--velmora-bg-alt)] rounded-sm mb-4">
        <img
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Wishlist button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setLiked(!liked);
          }}
          className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
          aria-label="Add to wishlist"
        >
          <Heart
            size={16}
            className={`transition-colors ${liked ? 'fill-red-400 text-red-400' : 'text-[var(--velmora-text-muted)]'}`}
          />
        </button>

        {/* Quick add */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full flex items-center justify-center gap-2 bg-[var(--velmora-dark)] text-white py-3 text-xs tracking-wider uppercase hover:bg-[var(--velmora-accent)] transition-colors"
          >
            <ShoppingBag size={14} />
            Add to Bag
          </button>
        </div>
      </div>

      <div className="text-center">
        <h3 className="product-name text-sm tracking-wider text-[var(--velmora-text)] group-hover:text-[var(--velmora-accent)] transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-[var(--velmora-text-muted)] mt-1">{product.subtitle}</p>
        <div className="flex items-center justify-center gap-2 mt-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-xs text-[var(--velmora-text-light)]">({product.reviews})</span>
        </div>
        <p className="text-sm font-medium mt-2">${product.price}</p>
      </div>
    </Link>
  );
}
