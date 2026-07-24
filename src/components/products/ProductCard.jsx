import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    addItem(product, product.variants?.[0] || null);
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden mb-4" style={{ backgroundColor: 'var(--color-sand)' }}>
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: isHovered && product.images[1] ? 0 : 1 }}
        />

        {/* Secondary Image (hover) */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: isHovered ? 1 : 0 }}
          />
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span
              className="px-3 py-1 text-xs font-medium tracking-wide"
              style={{ backgroundColor: 'var(--color-espresso)', color: 'var(--color-cream)' }}
            >
              NEW
            </span>
          )}
          {product.bestseller && !product.isNew && (
            <span
              className="px-3 py-1 text-xs font-medium tracking-wide"
              style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-espresso)' }}
            >
              BESTSELLER
            </span>
          )}
        </div>

        {/* Quick Add Button */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
          style={{ backgroundColor: 'rgba(250, 248, 245, 0.95)' }}
        >
          <button
            onClick={handleQuickAdd}
            className="w-full py-3 text-sm font-medium tracking-wide flex items-center justify-center gap-2 transition-all"
            style={{
              backgroundColor: isAdding ? 'var(--color-gold)' : 'var(--color-espresso)',
              color: isAdding ? 'var(--color-espresso)' : 'var(--color-cream)'
            }}
          >
            <ShoppingBag className="w-4 h-4" />
            {isAdding ? 'ADDED TO BAG' : 'QUICK ADD'}
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <h3 className="product-title text-sm">
          {product.name}
        </h3>
        <p className="text-sm" style={{ color: 'var(--color-taupe)' }}>
          {product.shortDescription}
        </p>
        
        {/* Rating */}
        <div className="flex items-center gap-2 pt-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-3.5 h-3.5"
                style={{ fill: 'var(--color-gold)', color: 'var(--color-gold)' }}
              />
            ))}
          </div>
          <span className="text-xs" style={{ color: 'var(--color-taupe)' }}>
            ({product.reviewCount})
          </span>
        </div>

        <p className="font-medium pt-1">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
