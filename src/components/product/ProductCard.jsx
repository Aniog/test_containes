import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    addToCart(product, 1, product.variants?.[0] || null);
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-product bg-charcoal-100 overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {/* Secondary Image */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Quick Add Button */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-4 left-4 right-4 bg-charcoal-800 text-cream-50 py-3 font-sans text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          } hover:bg-charcoal-900`}
        >
          {isAdding ? 'Added!' : 'Quick Add'}
        </button>

        {/* Bestseller Badge */}
        {product.isBestseller && (
          <span className="absolute top-4 left-4 bg-gold-500 text-charcoal-900 px-3 py-1 font-sans text-xs font-medium tracking-wider uppercase">
            Bestseller
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="font-serif text-sm uppercase tracking-extra-wide text-charcoal-800 mb-1">
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-1 mb-2">
          <Star size={12} className="text-gold-500 fill-gold-500" />
          <span className="font-sans text-xs text-charcoal-600">
            {product.rating} ({product.reviews})
          </span>
        </div>
        <p className="font-serif text-base text-charcoal-900">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
