import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const ProductCard = ({ product, index = 0 }) => {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const imgId1 = `product-card-${product.id}-1-${index}`;
  const imgId2 = `product-card-${product.id}-2-${index}`;
  const titleId = `product-card-title-${product.id}-${index}`;

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [hovered]);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold', 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const imageQuery = `[${titleId}]`;

  return (
    <div ref={containerRef}>
      <Link
        to={`/product/${product.id}`}
        className="group block"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-charcoal-100/20 mb-4 rounded-sm">
          {/* Primary image */}
          <img
            data-strk-img-id={imgId1}
            data-strk-img={imageQuery}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
            }`}
          />
          {/* Hover image */}
          <img
            data-strk-img-id={imgId2}
            data-strk-img={imageQuery}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          />

          {/* Add to Cart overlay */}
          <div
            className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-400 ${
              hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <button
              onClick={handleAddToCart}
              className="w-full py-2.5 bg-charcoal-800/90 backdrop-blur-sm text-cream-50 text-xs font-medium tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-charcoal-800 transition-colors rounded-sm"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              {added ? 'Added!' : 'Add to Bag'}
            </button>
          </div>
        </div>

        {/* Product info */}
        <div className="text-center px-2">
          <h3
            id={titleId}
            className="font-serif text-[13px] md:text-sm uppercase tracking-widest-xl text-charcoal-800 mb-1.5 leading-snug"
          >
            {product.name}
          </h3>
          <p className="text-sm font-medium text-charcoal-600">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
