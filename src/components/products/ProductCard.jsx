import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';
import { useCart } from '../../context/CartContext';
import { formatPrice, generateStars } from '../../lib/utils';

export default function ProductCard({ product, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();
  const stars = generateStars(product.rating);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
  };

  return (
    <Link
      ref={containerRef}
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-sand rounded-sm overflow-hidden mb-4">
        {/* Primary Image */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <img
            alt={product.name}
            data-strk-img-id={product.imgId}
            data-strk-img={`[product-desc-${product.id}] [product-name-${product.id}] gold jewelry elegant`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hover Image */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            alt={`${product.name} alternate view`}
            data-strk-img-id={product.imgIdHover}
            data-strk-img={`[product-name-${product.id}] alternate view gold jewelry detail`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Quick Add Button */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
            isHovered
              ? 'translate-y-0 opacity-100'
              : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={handleQuickAdd}
            className="w-full py-3 bg-charcoal/90 backdrop-blur-sm text-white text-btn uppercase tracking-btn font-sans hover:bg-gold transition-colors duration-200 rounded-btn flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </button>
        </div>

        {/* Hidden text for image interpolation */}
        <span id={`product-name-${product.id}`} className="hidden">{product.name}</span>
        <span id={`product-desc-${product.id}`} className="hidden">{product.description}</span>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="text-product-name uppercase font-sans text-charcoal group-hover:text-gold transition-colors duration-200">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-0.5">
            {[...Array(stars.full)].map((_, i) => (
              <Star key={`full-${i}`} className="w-3 h-3 fill-gold text-gold" />
            ))}
            {[...Array(stars.empty)].map((_, i) => (
              <Star key={`empty-${i}`} className="w-3 h-3 text-linen" />
            ))}
          </div>
          <span className="text-xs text-stone font-sans">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <p className="text-sm font-sans text-charcoal font-medium">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
