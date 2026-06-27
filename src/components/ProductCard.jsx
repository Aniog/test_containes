import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../data/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants?.[0] || 'Gold', 1);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-cream-dark overflow-hidden mb-4">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.id}-desc] [${product.id}-title] ${product.image}`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.imageAlt}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        <img
          data-strk-img-id={product.secondImgId}
          data-strk-img={`[${product.id}-desc] ${product.imageAlt} alternate angle`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.imageAlt}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {/* Hidden IDs for interpolation */}
        <span id={`${product.id}-title`} className="hidden">{product.name}</span>
        <span id={`${product.id}-desc`} className="hidden">{product.description}</span>

        {/* Quick add button */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-4 left-4 right-4 btn-accent text-xs rounded-none transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <ShoppingBag size={14} />
          Add to Cart
        </button>
      </div>

      {/* Product info */}
      <div className="text-center">
        <h3 className="product-name text-[13px] mb-1">{product.name}</h3>
        <p className="text-sm text-warm-gray font-medium">${product.price}</p>
        <div className="flex items-center justify-center gap-1 mt-1.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={10}
              className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-border'}
            />
          ))}
          <span className="text-[10px] text-warm-gray-light ml-1">({product.reviews})</span>
        </div>
      </div>
    </Link>
  );
}
