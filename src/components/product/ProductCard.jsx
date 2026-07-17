import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../data/products';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [isHovered, setIsHovered] = useState(false);
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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] bg-mist overflow-hidden mb-4">
        <img
          src={isHovered && product.imageHover ? product.imageHover : product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Quick Add Button */}
        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            className={`absolute bottom-4 left-4 right-4 py-3 bg-cream/95 text-charcoal text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:bg-champagne hover:text-white ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            Quick Add
          </button>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="font-serif text-sm tracking-wide text-warm-black uppercase">
          {product.name}
        </h3>
        <p className="text-sm text-stone">{product.description}</p>
        
        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              strokeWidth={1.5}
              className={i < product.rating ? 'text-champagne fill-champagne' : 'text-pebble'}
            />
          ))}
          <span className="text-xs text-stone ml-1">({product.reviews})</span>
        </div>

        <p className="font-medium text-warm-black">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;