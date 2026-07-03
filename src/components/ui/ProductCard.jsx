import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart, openCart } = useCart();

  const handleQuickAdd = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsAdding(true);
    
    // Simulate a brief delay for UX feedback
    await new Promise(resolve => setTimeout(resolve, 300));
    
    addToCart(product, product.variants[0], 1);
    setIsAdding(false);
    openCart();
  };

  return (
    <Link 
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-warm-white rounded-sm">
        {/* Primary Image */}
        <div className="aspect-[3/4] relative">
          <img
            src={product.images[0]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
            }`}
            loading="lazy"
          />
          
          {/* Secondary Image (shown on hover) */}
          {product.images[1] && (
            <img
              src={product.images[1]}
              alt={`${product.name} - alternate view`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
            />
          )}
          
          {/* Bestseller Badge */}
          {product.isBestseller && (
            <div className="absolute top-3 left-3 bg-charcoal text-warm-white px-3 py-1 text-xs font-sans tracking-wider">
              BESTSELLER
            </div>
          )}
          
          {/* Quick Add Button */}
          <div className={`
            absolute bottom-0 left-0 right-0 p-4 
            transform transition-all duration-300 ease-smooth
            ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
          `}>
            <button
              onClick={handleQuickAdd}
              disabled={isAdding}
              className="w-full bg-warm-white/95 backdrop-blur-sm text-charcoal py-3 
                         font-sans text-sm font-medium tracking-wide
                         hover:bg-gold-500 hover:text-white
                         transition-all duration-300 flex items-center justify-center gap-2"
            >
              {isAdding ? (
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" 
                           stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" 
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              ) : (
                <ShoppingBag className="w-4 h-4" />
              )}
              <span>{isAdding ? 'ADDING...' : 'QUICK ADD'}</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="pt-4 space-y-1">
        <h3 className="font-serif text-base text-charcoal tracking-ultra uppercase">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between">
          <span className="font-sans text-sm text-warmGray">
            ${product.price}
          </span>
          
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-gold-500 text-gold-500" />
            <span className="text-xs text-softGray font-sans">
              {product.rating} ({product.reviews})
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
