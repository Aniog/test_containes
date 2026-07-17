import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 'gold', 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => {
        setIsHovered(true);
        setCurrentImage(1);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setCurrentImage(0);
      }}
    >
      <div className="relative bg-ivory overflow-hidden img-zoom-hover">
        {/* Image */}
        <div className="aspect-[4/5]">
          <img
            src={product.images[currentImage]}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Quick Add Button */}
        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            className={`absolute bottom-4 left-4 right-4 bg-cream/95 text-charcoal font-sans text-sm py-3 px-4 transition-all duration-300 hover:bg-gold hover:text-white ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            Quick Add
          </button>
        )}

        {/* Sale Badge */}
        {!product.inStock && (
          <div className="absolute top-4 left-4 bg-charcoal text-cream font-sans text-xs px-3 py-1">
            Sold Out
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="mt-4 text-center">
        <h3 className="product-name text-charcoal group-hover:text-gold transition-colors duration-300">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              strokeWidth={1.5}
              className={i < product.rating ? 'text-gold fill-gold' : 'text-border'}
            />
          ))}
          <span className="font-sans text-xs text-warm-gray ml-1">
            ({product.reviews})
          </span>
        </div>

        <p className="font-sans text-sm text-charcoal mt-2">
          ${product.price}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;