import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product, showQuickAdd = true }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.variants[0], 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-velmora-warm aspect-[4/5]">
        {/* Primary Image */}
        <img
          src={product.image}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        
        {/* Hover Image */}
        <img
          src={product.hoverImage}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {/* Quick Add Button */}
        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            className={`absolute bottom-4 left-4 right-4 bg-velmora-cream text-velmora-charcoal py-3 px-4 text-sm tracking-wider uppercase font-medium transition-all duration-300 hover:bg-velmora-gold hover:text-white ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              <ShoppingBag size={16} />
              Quick Add
            </span>
          </button>
        )}

        {/* Sale Badge */}
        {!product.inStock && (
          <div className="absolute top-4 left-4 bg-velmora-charcoal text-white text-xs px-3 py-1 tracking-wider">
            SOLD OUT
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="mt-4 text-center">
        <h3 className="product-name text-sm">{product.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{product.description}</p>
        
        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className={i < product.rating ? 'text-velmora-gold fill-velmora-gold' : 'text-gray-300'}
            />
          ))}
          <span className="text-xs text-gray-400 ml-1">({product.reviews})</span>
        </div>

        <p className="mt-2 font-medium">${product.price}</p>
      </div>
    </Link>
  );
}