import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.variants[0]);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div 
        className="relative overflow-hidden rounded mb-4"
        style={{ backgroundColor: 'var(--cream-dark)', aspectRatio: '1 / 1' }}
      >
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Secondary Image (hover) */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} - alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Badges */}
        {product.isNew && (
          <span 
            className="absolute top-4 left-4 px-3 py-1 text-xs tracking-wider uppercase"
            style={{ 
              backgroundColor: 'var(--espresso)',
              color: 'var(--cream)'
            }}
          >
            New
          </span>
        )}
        {product.bestseller && !product.isNew && (
          <span 
            className="absolute top-4 left-4 px-3 py-1 text-xs tracking-wider uppercase"
            style={{ 
              backgroundColor: 'var(--gold)',
              color: 'var(--white)'
            }}
          >
            Bestseller
          </span>
        )}

        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-4 left-4 right-4 py-3 text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
          style={{ 
            backgroundColor: 'var(--white)',
            color: 'var(--espresso)'
          }}
        >
          <ShoppingBag size={16} />
          Add to Bag
        </button>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              fill={i < Math.floor(product.rating) ? 'var(--gold)' : 'transparent'}
              stroke={i < Math.floor(product.rating) ? 'var(--gold)' : 'var(--stone)'}
            />
          ))}
          <span className="text-xs ml-1" style={{ color: 'var(--stone-dark)' }}>
            ({product.reviews})
          </span>
        </div>

        {/* Name */}
        <h3 
          className="font-serif text-sm uppercase tracking-wider"
          style={{ color: 'var(--espresso-mid)' }}
        >
          {product.name}
        </h3>

        {/* Price */}
        <p className="price">${product.price}</p>

        {/* Variants */}
        {product.variants.length > 1 && (
          <p className="text-xs" style={{ color: 'var(--stone-dark)' }}>
            {product.variants.join(' / ')}
          </p>
        )}
      </div>
    </Link>
  );
}
