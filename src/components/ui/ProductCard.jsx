import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useToast } from '../../context/ToastContext';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();
  const { addToast } = useToast();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
    addToast(`${product.name} added to cart`);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-velmora-100 aspect-[3/4] mb-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          />
        )}
        
        {/* Quick add button */}
        <div
          className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={handleQuickAdd}
            className="w-full bg-white/95 backdrop-blur-sm text-charcoal py-3 text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-charcoal hover:text-white transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </button>
        </div>

        {/* Bestseller badge */}
        {product.bestseller && (
          <span className="absolute top-4 left-4 bg-gold-500 text-white text-[10px] tracking-widest uppercase px-3 py-1">
            Bestseller
          </span>
        )}
      </div>

      <div className="text-center">
        <h3 className="product-name text-sm mb-2">{product.name}</h3>
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating) ? 'fill-gold-400 text-gold-400' : 'text-velmora-300'
              }`}
            />
          ))}
          <span className="text-xs text-velmora-500 ml-1">({product.reviews})</span>
        </div>
        <p className="text-sm font-medium">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
