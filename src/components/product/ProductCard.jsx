import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
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
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-velmora-creamDark rounded-sm">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Secondary Image (on hover) */}
        <img
          src={product.images[1]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        />

        {/* Quick Add Button */}
        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            className={`absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm text-velmora-text py-3 px-4 
                       uppercase tracking-widest-lg text-xs font-medium
                       transition-all duration-300 hover:bg-velmora-gold hover:text-white
                       ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Quick Add
          </button>
        )}
      </div>

      {/* Product Info */}
      <div className="mt-4 text-center">
        <h3 className="product-name text-sm text-velmora-dark group-hover:text-velmora-gold transition-colors">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < product.rating ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-muted'
              }`}
            />
          ))}
          <span className="text-xs text-velmora-muted ml-1">({product.reviews})</span>
        </div>

        <p className="mt-2 text-velmora-gold font-medium">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;