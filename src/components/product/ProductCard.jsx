import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product, showQuickAdd = true }) {
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
      <div className="relative aspect-product bg-velmora-bg-secondary overflow-hidden">
        {/* Primary Image */}
        <img
          src={product.image}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {/* Hover Image */}
        <img
          src={product.hoverImage}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* Quick Add Button */}
        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            className={`absolute bottom-4 left-4 right-4 bg-velmora-bg-primary/95 backdrop-blur-sm text-velmora-text-primary py-3 px-4 text-sm font-medium transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            } hover:bg-velmora-accent hover:text-white`}
          >
            <span className="flex items-center justify-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              Quick Add
            </span>
          </button>
        )}
      </div>
      <div className="mt-4">
        <h3 className="product-name text-sm text-velmora-text-primary group-hover:text-velmora-accent transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-velmora-text-secondary mt-1">{product.description}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="font-medium text-velmora-text-primary">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-velmora-accent text-velmora-accent" />
            <span className="text-xs text-velmora-text-secondary">{product.reviews}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}