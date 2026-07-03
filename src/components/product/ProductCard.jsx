import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsAdding(true);
    const variant = product.variants?.[0] || 'Gold';
    addItem(product, variant, 1);
    
    setTimeout(() => {
      setIsAdding(false);
    }, 1500);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className={`group block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-cream rounded border border-sand transition-shadow duration-300 hover:shadow-card-hover">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
            }`}
          />
          
          {product.images[1] && (
            <img
              src={product.images[1]}
              alt={`${product.name} - alternate view`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}

          {product.badge && (
            <div className="absolute top-3 left-3">
              <span className="px-2 py-1 bg-gold text-white text-2xs uppercase tracking-wide">
                {product.badge}
              </span>
            </div>
          )}

          <div
            className={`absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-charcoal/60 to-transparent transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button
              onClick={handleQuickAdd}
              disabled={isAdding}
              className="w-full py-3 bg-white text-charcoal text-xs uppercase tracking-wide font-medium rounded-sm hover:bg-ivory transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {isAdding ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  <span>Added</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Quick Add</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="p-4">
          <h3 className="product-name text-sm mb-1">{product.name}</h3>
          
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(product.rating)
                      ? 'text-gold fill-gold'
                      : 'text-sand'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-stone">({product.reviews})</span>
          </div>

          <p className="font-sans text-charcoal">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
