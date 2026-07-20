import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 'Gold', 1);
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] bg-white overflow-hidden">
        <img 
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Quick Add Overlay */}
        {showQuickAdd && (
          <div className={`absolute inset-0 bg-charcoal/20 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <button 
              onClick={handleQuickAdd}
              className="bg-cream text-charcoal px-6 py-3 text-xs uppercase tracking-[0.1em] font-semibold hover:bg-gold hover:text-charcoal transition-all duration-300 shadow-card"
            >
              Quick Add
            </button>
          </div>
        )}

        {/* Sale Badge */}
        {!product.inStock && (
          <div className="absolute top-4 left-4 bg-charcoal text-cream px-3 py-1 text-xs uppercase tracking-wider">
            Sold Out
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="mt-4 text-center">
        <h3 className="font-serif text-product text-charcoal uppercase tracking-[0.15em]">
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-1 mt-2">
          <Star size={12} className="fill-gold text-gold" />
          <span className="text-xs text-taupe">{product.rating} ({product.reviews})</span>
        </div>
        <p className="mt-2 text-charcoal font-medium">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;