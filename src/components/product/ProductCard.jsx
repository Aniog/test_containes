import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { Plus, ShoppingBag } from 'lucide-react';
import StarRating from '../ui/StarRating';

const ProductCard = ({ product, onQuickView }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart, openCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.variants[0]);
    openCart();
  };

  return (
    <div
      className="group relative bg-velmora-cream rounded-lg overflow-hidden transition-all duration-500 hover:shadow-premium"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-velmora-warm">
        <img
          src={product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
        />

        {/* Second image on hover */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} - alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Quick add button */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-4 left-1/2 -translate-x-1/2 bg-velmora-ivory text-velmora-charcoal px-6 py-3 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-300 flex items-center space-x-2 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Add to Cart</span>
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-2">
        <h3 className="font-serif text-lg tracking-widest uppercase text-velmora-charcoal">
          {product.name}
        </h3>

        <StarRating rating={product.rating} reviews={product.reviews} />

        <p className="text-velmora-gold font-medium text-lg">
          ${product.price}
        </p>

        {product.material && (
          <p className="text-sm text-velmora-mist">
            {product.material}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
