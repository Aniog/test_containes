import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
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
      <div className="relative aspect-[4/5] bg-velmora-light-gray overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        
        {/* Secondary Image (on hover) */}
        <img
          src={product.images[1]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {/* Quick Add Button */}
        {showQuickAdd && (
          <div
            className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button
              onClick={handleQuickAdd}
              className="w-full bg-velmora-cream/95 backdrop-blur-sm text-velmora-charcoal py-3 text-sm font-medium flex items-center justify-center gap-2 hover:bg-velmora-gold hover:text-velmora-charcoal transition-colors"
            >
              <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
              Quick Add
            </button>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="font-serif text-sm uppercase tracking-[0.15em] text-velmora-charcoal mb-1 group-hover:text-velmora-gold transition-colors">
          {product.name}
        </h3>
        <p className="text-sm font-medium text-velmora-warm-gray">
          ${product.price}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;