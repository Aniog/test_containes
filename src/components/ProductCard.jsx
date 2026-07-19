import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Check } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import StarRating from './StarRating';
import ProductImage from './ProductImage';

const PLACEHOLDER_SRC =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function ProductCard({ product, query }) {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 'gold', 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  const imageQuery = query || `[${product.descId}] [${product.titleId}]`;

  return (
    <article
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-cream-200">
          <ProductImage
            imgId={product.imgId}
            query={imageQuery}
            ratio="4x5"
            width={600}
            alt={product.name}
            className="transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div
            className={`absolute inset-0 bg-black/5 transition-opacity duration-400 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <button
            onClick={handleAdd}
            className={`absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 py-3 px-4 text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
              added
                ? 'bg-ink text-cream-50'
                : 'bg-cream-50 text-ink hover:bg-gold hover:text-white'
            } ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}
            aria-label={`Add ${product.name} to cart`}
          >
            {added ? (
              <>
                <Check size={16} /> Added
              </>
            ) : (
              <>
                <ShoppingBag size={16} /> Quick Add
              </>
            )}
          </button>
        </div>

        <div className="pt-4 text-center">
          <StarRating rating={product.rating} size={12} />
          <h3
            id={product.titleId}
            className="mt-2 product-name text-sm md:text-base"
          >
            {product.name}
          </h3>
          <p id={product.descId} className="sr-only">
            {product.description}
          </p>
          <p className="mt-1.5 font-sans text-sm text-warmgray-600">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    </article>
  );
}
