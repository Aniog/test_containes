import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart, openCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 'gold', 1);
    openCart();
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-product bg-cream overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            isHovered && product.images[1] ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
          loading="lazy"
        />
        
        {/* Secondary Image (hover) */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            loading="lazy"
          />
        )}

        {/* Quick Add Button */}
        <div
          className={`absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-espresso/80 to-transparent transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={handleQuickAdd}
            className="w-full bg-ivory text-espresso py-3 text-xs uppercase tracking-wider hover:bg-gold-100 transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Quick Add
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div>
        <h3 className="product-title text-espresso text-xs mb-1.5">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-2 mb-2">
          <span className="font-serif text-lg text-espresso">
            ${product.price}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
            <span className="text-xs text-taupe">
              {product.rating} ({product.reviews})
            </span>
          </div>
        </div>
        
        {/* Category Tag */}
        <p className="text-xs text-taupe capitalize">
          {product.category}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
