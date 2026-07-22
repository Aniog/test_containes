import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    addToCart(product, product.variants[0], 1);
    setTimeout(() => setIsAdding(false), 1000);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star
            key={i}
            className="w-3 h-3 fill-velmora-gold text-velmora-gold"
          />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <Star
            key={i}
            className="w-3 h-3 fill-velmora-gold/50 text-velmora-gold"
          />
        );
      } else {
        stars.push(
          <Star
            key={i}
            className="w-3 h-3 fill-velmora-sand text-velmora-sand"
          />
        );
      }
    }
    return stars;
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-velmora-sand/50 rounded overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* Secondary Image (on hover) */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 px-2 py-1 bg-velmora-charcoal text-velmora-cream text-xs tracking-wider">
            {product.badge}
          </span>
        )}

        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-0 left-0 right-0 py-3 bg-velmora-charcoal text-velmora-cream text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          {isAdding ? 'Added!' : 'Quick Add'}
        </button>
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <h3 className="product-name text-velmora-charcoal">{product.name}</h3>
        <p className="text-xs text-velmora-taupe">{product.description}</p>
        <div className="flex items-center justify-between pt-2">
          <span className="font-serif text-velmora-charcoal">${product.price}</span>
          <div className="flex items-center gap-1">
            {renderStars(product.rating)}
            <span className="text-xs text-velmora-taupe ml-1">({product.reviews})</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
