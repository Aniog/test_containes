import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
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
      <Link to={`/product/${product.id}`}>
        {/* Image Container */}
        <div className="relative overflow-hidden bg-velmora-cream aspect-square">
          <img 
            src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.name}
            className="product-image w-full h-full object-cover"
          />
          
          {/* Quick Add Overlay */}
          <div className="quick-add-overlay">
            <button
              onClick={handleQuickAdd}
              className="bg-white text-velmora-charcoal px-6 py-3 font-sans text-xs font-medium tracking-wider uppercase hover:bg-velmora-charcoal hover:text-white transition-all duration-300"
            >
              <Plus className="w-4 h-4 inline-block mr-2" />
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="pt-4 pb-2">
          <h3 className="text-product-name text-velmora-charcoal mb-2">
            {product.name}
          </h3>
          <p className="font-sans text-sm text-velmora-charcoal-light mb-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-serif text-lg font-medium text-velmora-charcoal">
              ${product.price}
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
              <span className="font-sans text-xs text-velmora-charcoal-light">
                {product.rating} ({product.reviews})
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
