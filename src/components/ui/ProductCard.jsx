import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { ProductImage } from './ProductImage';
import { StarRating } from './StarRating';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export function ProductCard({ product, className = '' }) {
  const { addToCart } = useCart();
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    // Image helper is loaded by the parent container; this component only tags images.
  }, []);

  return (
    <article
      ref={cardRef}
      className={`group relative flex flex-col ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/products/${product.id}`} className="block overflow-hidden bg-white">
        <div className="relative aspect-[4/5] overflow-hidden bg-cream">
          <ProductImage
            product={product}
            ratio="4x5"
            width={600}
            imgId={`${product.id}-card-img`}
            className={`transition-transform duration-700 ease-out ${hovered ? 'scale-105' : 'scale-100'}`}
          />
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              addToCart(product, 1, product.tone[0] || 'gold');
            }}
            className="absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 bg-espresso text-white py-3 text-xs uppercase tracking-label font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-accent"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>
      </Link>

      <div className="pt-4 text-center">
        <h3
          id={`${product.id}-title`}
          className="text-xs uppercase tracking-label font-medium text-espresso mb-1"
        >
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </h3>
        <p id={`${product.id}-desc`} className="sr-only">
          {product.description}
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-taupe">
          <StarRating rating={product.rating} size={12} />
          <span>{formatPrice(product.price)}</span>
        </div>
      </div>
    </article>
  );
}
