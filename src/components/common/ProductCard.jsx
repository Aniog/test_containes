import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { ShoppingBag, Heart } from 'lucide-react';

const ProductCard = ({ product, index = 0 }) => {
  const { addToCart, openCart } = useCart();
  const [isHovered, setIsHovered] = React.useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product, product.variants[0]);
    openCart();
  };

  return (
    <div
      className="group animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-velmora-warm aspect-square mb-4">
          <img
            src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Quick Add Button - Appears on Hover */}
          <button
            onClick={handleAddToCart}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-velmora-charcoal 
                       px-6 py-2 font-sans text-xs uppercase tracking-wider
                       opacity-0 group-hover:opacity-100 transition-all duration-300
                       hover:bg-velmora-gold hover:text-white transform translate-y-2 
                       group-hover:translate-y-0 flex items-center gap-2"
          >
            <ShoppingBag size={14} />
            Quick Add
          </button>

          {/* Wishlist Button */}
          <button
            className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm 
                       rounded-full flex items-center justify-center
                       opacity-0 group-hover:opacity-100 transition-all duration-300
                       hover:bg-velmora-gold hover:text-white"
            aria-label="Add to wishlist"
          >
            <Heart size={16} />
          </button>
        </div>

        {/* Product Info */}
        <div className="text-center space-y-2">
          <h3 className="product-name text-sm">
            {product.name}
          </h3>
          <p className="font-sans text-sm text-velmora-charcoal-light">
            ${product.price}
          </p>
          {/* Rating */}
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-xs ${
                  i < Math.floor(product.rating)
                    ? 'text-velmora-gold'
                    : 'text-velmora-sand'
                }`}
              >
                ★
              </span>
            ))}
            <span className="text-xs text-velmora-charcoal-light ml-1">
              ({product.reviews})
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
