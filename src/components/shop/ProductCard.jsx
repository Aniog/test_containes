import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addToCart } = useCart();

  const formatPrice = (price) => `$${price.toFixed(2)}`;

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, 'gold');
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] bg-stone/10 overflow-hidden mb-4">
        {/* First Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Second Image on Hover */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} - alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Quick Add Button */}
        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            className={`absolute bottom-4 left-4 right-4 bg-ivory text-charcoal py-3 px-4 uppercase tracking-widest text-xs font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            } hover:bg-gold`}
          >
            <ShoppingBag size={14} />
            Quick Add
          </button>
        )}

        {/* Sale Badge */}
        {!product.inStock && (
          <span className="absolute top-4 left-4 bg-error text-ivory px-3 py-1 text-xs uppercase tracking-widest">
            Sold Out
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="product-name text-ivory mb-1 group-hover:text-gold transition-colors">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={12} 
              className={i < product.rating ? 'text-gold fill-gold' : 'text-stone'}
              strokeWidth={1.5}
            />
          ))}
          <span className="text-xs text-warm-gray ml-1">({product.reviews})</span>
        </div>

        <p className="text-ivory font-medium">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;