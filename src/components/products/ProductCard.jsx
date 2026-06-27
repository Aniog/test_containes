import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product, index = 0 }) {
  const { addToCart } = useCart();

  return (
    <div 
      className="group animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-[4/5] bg-[#F5F0E8] overflow-hidden mb-4">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Hover Image */}
          <img 
            src={product.imageHover} 
            alt={`${product.name} - alternate view`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          
          {/* Quick Add Button */}
          <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="absolute bottom-4 left-4 right-4 bg-[#1A1A1A] text-white py-3 text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#C9A962]"
          >
            Quick Add
          </button>
        </div>
      </Link>

      {/* Product Info */}
      <div className="text-center">
        <Link to={`/product/${product.id}`}>
          <h3 className="product-name text-xs mb-1 hover:text-[#C9A962] transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-[#6B6B6B] mb-2">{product.description}</p>
        
        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={12} 
              fill={i < product.rating ? "#C9A962" : "none"}
              stroke={i < product.rating ? "#C9A962" : "#A8A29E"}
              strokeWidth={1.5}
            />
          ))}
          <span className="text-xs text-[#A8A29E] ml-1">({product.reviews})</span>
        </div>
        
        <p className="font-sans font-medium">${product.price}</p>
      </div>
    </div>
  );
}