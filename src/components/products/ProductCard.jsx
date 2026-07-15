import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-[4/5] overflow-hidden bg-lightGray/20 mb-4">
          <img
            src={product.images[0]}
            alt={product.name}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isHovered ? 'scale-105' : 'scale-100'
            }`}
          />
          
          {/* Second Image on Hover */}
          <img
            src={product.images[1]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Quick Add Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product, 1, 'gold');
            }}
            className={`absolute bottom-4 left-4 right-4 py-3 bg-cream text-charcoal text-sm uppercase tracking-widest transition-all duration-300 hover:bg-gold hover:text-white ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              Quick Add
            </span>
          </button>
        </div>

        {/* Product Info */}
        <div className="text-center">
          <h3 className="font-serif text-sm uppercase tracking-widest mb-1 group-hover:text-gold transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < product.rating ? 'fill-gold text-gold' : 'text-lightGray'
                }`}
              />
            ))}
            <span className="text-xs text-warmGray ml-1">({product.reviews})</span>
          </div>
          <p className="text-gold font-medium">${product.price}</p>
        </div>
      </Link>
    </div>
  );
}