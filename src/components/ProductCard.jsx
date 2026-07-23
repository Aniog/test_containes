import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, 'Gold');
  };

  return (
    <div 
      className="product-card group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
        {/* Image Container */}
        <div className="relative overflow-hidden bg-cream-100" style={{ aspectRatio: '1/1' }}>
          <img 
            src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover"
            style={{ aspectRatio: '1/1' }}
          />

          {/* Quick Add Button */}
          <button
            onClick={handleAddToCart}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 
                       bg-cream-50 text-charcoal px-6 py-2 uppercase tracking-wider text-xs
                       opacity-0 group-hover:opacity-100 transition-all duration-300
                       hover:bg-charcoal hover:text-cream-50 border border-charcoal"
            style={{ whiteSpace: 'nowrap' }}
          >
            <Plus size={14} className="inline-block mr-1" />
            Add to Cart
          </button>
        </div>

        {/* Product Info */}
        <div className="mt-4 space-y-1">
          <h3 className="product-name text-charcoal">
            {product.name}
          </h3>
          
          <div className="flex items-center gap-2">
            <div className="star-rating">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={12} 
                  fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                  className={i < Math.floor(product.rating) ? '' : 'text-charcoal-200'}
                />
              ))}
            </div>
            <span className="text-charcoal-500 text-xs">({product.reviews})</span>
          </div>

          <p className="text-charcoal font-medium" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.125rem' }}>
            ${product.price}
          </p>
        </div>
      </Link>
    </div>
  );
}
