import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import Rating from '@/components/ui/Rating';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <div
      className="group product-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`}>
        {/* Image Container */}
        <div className="relative aspect-square bg-parchment rounded overflow-hidden mb-4">
          {/* Primary Image */}
          <img
            src={product.images[0]}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: hovered ? 0 : 1 }}
          />
          {/* Secondary Image */}
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 product-image-secondary"
            style={{ opacity: hovered ? 1 : 0 }}
          />

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 bg-gold text-white font-sans text-xs px-2 py-1 uppercase tracking-wide">
              {product.badge}
            </span>
          )}

          {/* Quick Add Button */}
          <div 
            className={`absolute bottom-0 left-0 right-0 bg-charcoal/90 backdrop-blur-sm transition-all duration-300 ${
              hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
            }`}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addToCart(product, 1, product.variants[0]);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-white font-sans text-sm"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Bag
            </button>
          </div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="text-center">
        <Link to={`/product/${product.slug}`}>
          <h3 className="product-name text-charcoal mb-2 hover:text-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        <Rating rating={product.rating} reviews={product.reviews} size="sm" />
        <p className="font-serif text-gold mt-2">
          {formatPrice(product.price)}
        </p>
        {product.variants.length > 1 && (
          <p className="font-sans text-xs text-warmGray mt-1">
            {product.variants.join(' / ')}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
