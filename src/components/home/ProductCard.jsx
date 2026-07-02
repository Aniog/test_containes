import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold', 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-charcoal-100 overflow-hidden mb-4">
        <img
          src={isHovered ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Quick add button */}
        <div className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button
            onClick={handleAddToCart}
            className="w-full flex items-center justify-center gap-2 py-3 bg-charcoal-900/90 backdrop-blur-sm text-velmora-50 text-xs tracking-widest uppercase hover:bg-charcoal-900 transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Bag
          </button>
        </div>
      </div>
      <h3 className="product-name mb-1">{product.name}</h3>
      <p className="text-xs text-charcoal-500 mb-2">{product.description}</p>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-gold-500 fill-gold-500' : 'text-charcoal-300'}`}
            />
          ))}
        </div>
        <span className="text-xs text-charcoal-400">({product.reviews})</span>
      </div>
      <p className="text-sm font-medium text-charcoal-900 mt-2">${product.price}</p>
    </Link>
  );
}
