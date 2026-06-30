import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product, onQuickAdd }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addItem, openCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold', 1);
    openCart();
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="product-card block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="product-card-image relative">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-base-paper animate-pulse" />
        )}
        <img
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-500 ${isHovered ? 'scale-105' : 'scale-100'} ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Quick add button */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-4 left-4 right-4 bg-base-cream/95 backdrop-blur-sm text-base-charcoal py-3 px-4 flex items-center justify-center gap-2 text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:bg-gold hover:text-base-cream ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          Add to Cart
        </button>

        {/* Badge */}
        {product.rating >= 4.9 && (
          <span className="absolute top-4 left-4 badge">Bestseller</span>
        )}
      </div>

      {/* Product info */}
      <div className="p-5">
        <h3 className="font-display text-lg font-medium text-base-charcoal mb-1 uppercase tracking-wider">
          {product.name}
        </h3>
        <p className="text-sm text-base-muted mb-3">
          {product.category === 'earrings' && 'Earrings'}
          {product.category === 'necklaces' && 'Necklace'}
          {product.category === 'huggies' && 'Huggie Earrings'}
          {product.category === 'sets' && 'Jewelry Set'}
        </p>
        <div className="flex items-center justify-between">
          <p className="font-display text-xl font-medium text-base-charcoal">
            ${product.price}
          </p>
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-gold text-gold" />
            <span className="text-xs text-base-muted">{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
