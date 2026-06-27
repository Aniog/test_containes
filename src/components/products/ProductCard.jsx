import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1, 'gold');
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] bg-ivory overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.image}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {/* Hover Image */}
        <img
          src={product.hoverImage}
          alt={`${product.name} - alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 bg-charcoal text-white text-xs tracking-wider uppercase">
              {product.badge}
            </span>
          </div>
        )}

        {/* Quick Add Button */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal/60 to-transparent transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={handleQuickAdd}
            className="w-full py-3 bg-white text-charcoal text-xs font-medium tracking-wider uppercase hover:bg-gold hover:text-white transition-colors"
          >
            Quick Add
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-border'}
            />
          ))}
          <span className="text-xs text-warm-gray ml-1">({product.reviews})</span>
        </div>
        <h3 className="font-serif text-sm md:text-base tracking-wide text-charcoal group-hover:text-gold transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-warm-gray">${product.price}</p>
      </div>
    </Link>
  );
}
