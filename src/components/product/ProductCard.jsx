import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <div
      ref={containerRef}
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-brand-ivory overflow-hidden mb-3">
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            data-strk-img-id={product.imgId2}
            data-strk-img={`[${product.titleId}] gold jewelry worn`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} - alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />

          {/* Quick add button */}
          <button
            onClick={handleAddToCart}
            className={`absolute bottom-0 left-0 right-0 bg-brand-charcoal/90 text-brand-cream text-[10px] tracking-widest uppercase py-2.5 font-sans font-medium transition-all duration-300 hover:bg-brand-gold ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
          >
            Add to Cart
          </button>
        </div>

        {/* Product info */}
        <div className="text-center">
          <h3 id={product.titleId} className="text-product text-[11px] md:text-xs font-medium text-brand-charcoal">
            {product.name}
          </h3>
          <p id={product.descId} className="sr-only">{product.description}</p>
          <p className="mt-1 text-sm font-sans text-brand-slate">${product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
