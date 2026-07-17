import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { Plus, Check } from 'lucide-react';

const ProductCard = ({ product, index = 0 }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i}>★</span>);
    }
    if (hasHalfStar) {
      stars.push(<span key="half">☆</span>);
    }
    return stars;
  };

  return (
    <a href={`/product/${product.id}`} className="product-card group block">
      <div
        className="relative overflow-hidden bg-ivory"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main Image */}
        <div className="aspect-[3/4] img-hover-zoom">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hover Image */}
        {product.images[1] && (
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="aspect-[3/4] img-hover-zoom">
              <img
                src={product.images[1]}
                alt={`${product.name} - alternate view`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          className="quick-add-btn"
        >
          {isAdded ? (
            <span className="flex items-center justify-center gap-2">
              <Check size={16} />
              Added to Cart
            </span>
          ) : (
            'Add to Cart'
          )}
        </button>
      </div>

      {/* Product Info */}
      <div className="mt-6 space-y-2">
        <h3 className="product-name text-sm md:text-base">
          {product.name}
        </h3>
        <p className="text-sm text-warm-gray font-sans">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-sans text-base font-medium">
            ${product.price}
          </span>
          <div className="flex items-center gap-1 text-sm">
            <span className="text-gold">{renderStars(product.rating)}</span>
            <span className="text-warm-gray">({product.reviews})</span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
