import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem, openCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
    openCart();
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-cream-100 overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          }`}
        />
        
        {/* Secondary Image (hover) */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} - alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 px-2 py-1 bg-charcoal-900/90 text-cream-50 
                           text-[10px] font-sans font-medium tracking-wider uppercase">
            {product.badge}
          </span>
        )}

        {/* Quick Add Button */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-0 left-0 right-0 py-3 bg-charcoal-900/90 text-cream-50 
                     font-sans text-xs font-medium tracking-widest uppercase
                     transform transition-all duration-300 flex items-center justify-center gap-2
                     ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
        >
          <ShoppingBag className="w-4 h-4" />
          Add to Cart
        </button>
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating)
                  ? 'text-gold-500 fill-gold-500'
                  : 'text-charcoal-300'
              }`}
            />
          ))}
          <span className="text-[10px] text-charcoal-400 ml-1">({product.reviews})</span>
        </div>

        {/* Name */}
        <h3 className="font-serif text-sm uppercase tracking-extra-wide text-charcoal-900 
                      group-hover:text-gold-700 transition-colors duration-200">
          {product.name}
        </h3>

        {/* Price */}
        <p className="font-sans text-sm text-charcoal-700">
          ${product.price}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
