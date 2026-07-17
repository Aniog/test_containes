import React from 'react';
import { useCart } from '../../context/CartContext';
import { Star, ShoppingBag } from 'lucide-react';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-velmora-warm-white aspect-square">
        <img
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Quick Add Button */}
        <button
          onClick={() => addToCart(product)}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-velmora-text px-6 py-2 text-sm tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-velmora-gold hover:text-white"
        >
          <ShoppingBag size={16} className="inline-block mr-2" />
          ADD TO CART
        </button>
      </div>

      {/* Product Info */}
      <div className="mt-4 space-y-1">
        <h3 className="text-sm font-serif uppercase tracking-wider font-['Cormorant_Garamond']">
          {product.name}
        </h3>
        <p className="text-xs text-velmora-text-light">{product.description}</p>
        <div className="flex items-center space-x-1">
          <Star size={12} className="text-velmora-gold fill-current" />
          <span className="text-xs text-velmora-text-light">{product.rating}</span>
        </div>
        <p className="text-sm font-light font-['Cormorant_Garamond'] text-lg">
          ${product.price}
        </p>
      </div>
    </div>
  );
}
