import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { formatPrice } from '../../data/products';
import { useCart } from '../../context/CartContext';
import StarRating from '../ui/StarRating';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, 'gold');
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
      <div className="relative overflow-hidden bg-velmora-sand aspect-[4/5] mb-4">
        <img
          src={product.images[currentImage]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            className={`absolute bottom-4 left-4 right-4 bg-velmora-charcoal text-white py-3 px-4 flex items-center justify-center gap-2 text-sm font-sans transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            Quick Add
          </button>
        )}
      </div>

      <div className="space-y-1">
        <h3 className="product-name text-velmora-charcoal">{product.name}</h3>
        <div className="flex items-center gap-2">
          <StarRating rating={product.rating} size="sm" />
          <span className="text-xs text-velmora-muted">({product.reviews})</span>
        </div>
        <p className="text-velmora-charcoal font-sans font-medium">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;