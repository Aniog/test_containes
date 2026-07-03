import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Plus, ShoppingBag } from 'lucide-react';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        {/* Image Container */}
        <div className="relative aspect-[3/4] bg-velmora-cream overflow-hidden mb-4">
          <img
            src={product.images[0]}
            alt={product.name}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? 'scale-105' : 'scale-100'
            }`}
          />

          {/* Second Image on Hover */}
          {product.images[1] && (
            <img
              src={product.images[1]}
              alt={product.name}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}

          {/* Quick Add Button */}
          <button
            onClick={handleQuickAdd}
            className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-velmora-text px-6 py-3 text-sm tracking-wider uppercase transition-all duration-300 hover:bg-velmora-gold hover:text-white ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <ShoppingBag size={16} className="inline-block mr-2" />
            Quick Add
          </button>
        </div>

        {/* Product Info */}
        <div className="text-center">
          <h3 className="font-serif text-sm tracking-[0.15em] uppercase text-velmora-text mb-2">
            {product.name}
          </h3>
          <p className="text-velmora-gold font-medium text-sm">
            ${product.price}
          </p>

          {/* Rating */}
          <div className="flex items-center justify-center mt-2 space-x-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-xs text-velmora-gold">
                ★
              </span>
            ))}
            <span className="text-xs text-velmora-text-secondary ml-1">
              ({product.reviews})
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
