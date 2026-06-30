import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, index = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, product.variants[0]);
  };

  return (
    <div 
      className="group animate-slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.slug}`}>
        <div className="relative aspect-[4/5] bg-ivory overflow-hidden">
          {/* Primary Image */}
          <img
            src={product.images[0]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}
          />
          
          {/* Secondary Image (on hover) */}
          <img
            src={product.images[1]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
          
          {/* Quick Add Button */}
          <div 
            className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal/60 to-transparent transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button
              onClick={handleQuickAdd}
              className="w-full bg-cream text-charcoal py-3 text-sm tracking-widest hover:bg-gold-light transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag size={16} />
              QUICK ADD
            </button>
          </div>
        </div>
        
        {/* Product Info */}
        <div className="mt-4 text-center">
          <h3 className="font-serif text-sm tracking-widest text-charcoal">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-warm-gray">${product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;