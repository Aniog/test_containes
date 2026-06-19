import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, product.variants[0]);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] bg-cream-100 overflow-hidden mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          }`}
        />
        
        {/* Secondary Image (Hover) */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-4 left-4 right-4 bg-charcoal-800/90 backdrop-blur-sm text-cream-50 py-3 px-4 font-sans text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-300 hover:bg-charcoal-800 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          Add to Bag
        </button>

        {/* Badge */}
        {product.isSet && (
          <div className="absolute top-3 left-3">
            <span className="bg-gold-500 text-cream-50 text-[10px] font-sans font-medium tracking-wider uppercase px-2 py-1">
              Gift Set
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <h3 className="product-name text-sm text-charcoal-800 group-hover:text-gold-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-charcoal-500">{product.description}</p>
        
        {/* Rating */}
        <div className="flex items-center gap-1 pt-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating)
                    ? 'text-gold-500 fill-gold-500'
                    : 'text-charcoal-300'
                }`}
              />
            ))}
          </div>
          <span className="text-[10px] text-charcoal-400">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <p className="font-serif text-lg text-charcoal-800 pt-1">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}
