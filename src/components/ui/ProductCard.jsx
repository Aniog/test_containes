import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-3 h-3 ${i < Math.floor(rating) ? 'fill-gold text-gold' : 'text-lightGray'}`}
        />
      ))}
    </div>
  );
}

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.variants[0]);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] bg-cream rounded-lg overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          }`}
        />
        
        {/* Secondary Image */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Bestseller Badge */}
        {product.bestseller && (
          <div className="absolute top-3 left-3 bg-warmBlack/80 text-white text-xs px-3 py-1 rounded-sm backdrop-blur-sm">
            Bestseller
          </div>
        )}

        {/* Quick Add Button */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-0 left-0 right-0 py-3 bg-warmBlack/90 text-white text-sm font-medium 
            flex items-center justify-center gap-2 transition-all duration-300 backdrop-blur-sm
            ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}
        >
          <ShoppingBag className="w-4 h-4" />
          Add to Bag
        </button>
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <h3 className="product-name text-sm text-charcoal group-hover:text-gold transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between">
          <p className="text-warmGray">${product.price}</p>
          <StarRating rating={product.rating} />
        </div>
      </div>
    </Link>
  );
}
