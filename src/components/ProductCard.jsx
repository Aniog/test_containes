import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [liked, setLiked] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-champagne rounded-sm">
        <img
          data-strk-img-id={`product-${product.id}-main`}
          data-strk-img={`[${product.id}-name] jewelry product photography`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src={product.imageUrl}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-charcoal text-white text-[10px] font-sans font-medium tracking-ultra-wide uppercase px-3 py-1">
              New
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setLiked(!liked);
          }}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Add to wishlist"
        >
          <Heart
            size={16}
            className={liked ? 'fill-rose-gold text-rose-gold' : 'text-charcoal'}
          />
        </button>

        {/* Quick add */}
        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={handleAddToCart}
            className="w-full bg-charcoal/90 backdrop-blur-sm text-white py-3 px-4 flex items-center justify-center gap-2 text-xs font-sans font-medium tracking-ultra-wide uppercase hover:bg-charcoal transition-colors"
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 space-y-1">
        <p id={`product-${product.id}-name`} className="font-serif text-lg md:text-xl font-medium tracking-wider text-charcoal group-hover:text-gold-600 transition-colors">
          {product.name}
        </p>
        <div className="flex items-center gap-3">
          <p className="font-sans text-sm font-medium text-charcoal">
            ${product.price}
          </p>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-3 h-3 ${i < Math.round(product.rating) ? 'text-gold-500 fill-gold-500' : 'text-warmGray-300'}`}
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-xs text-warmGray-400 ml-1">({product.reviewCount})</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
