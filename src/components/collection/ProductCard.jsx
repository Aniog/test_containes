import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem, toggleCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addItem(product, product.variants[0]);
    toggleCart();
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[var(--color-cream)] mb-4">
        <img
          src={isHovered ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Quick add button */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm py-3 text-sm tracking-wider uppercase opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-[var(--color-charcoal)] hover:text-white"
        >
          <ShoppingBag className="w-4 h-4 inline mr-2" />
          Add to Cart
        </button>
      </div>
      
      <h3 className="product-name text-sm mb-1 group-hover:text-[var(--color-gold)] transition-colors">
        {product.name}
      </h3>
      <p className="text-xs text-[var(--color-warm-gray)] mb-2 line-clamp-1">{product.description}</p>
      <div className="flex items-center justify-between">
        <span className="font-medium">${product.price}</span>
        <div className="flex items-center gap-1">
          <Star className="w-3 h-3 fill-[var(--color-gold)] text-[var(--color-gold)]" />
          <span className="text-xs text-[var(--color-warm-gray)]">{product.rating}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
