import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product, compact = false }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const { addItem } = useCart();

  const currentImage = isHovered && product.images[1] ? product.images[1] : product.images[0];

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-ivory-warm aspect-square mb-4">
        {/* Shimmer placeholder */}
        {!imgLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-ivory-warm via-ivory-dark to-ivory-warm bg-[length:200%_100%] animate-shimmer" />
        )}
        <img
          src={currentImage}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 ease-luxury group-hover:scale-105 ${
            imgLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImgLoaded(true)}
          loading="lazy"
        />
        {/* Quick Add overlay */}
        <div
          className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full flex items-center justify-center gap-2 py-3 bg-charcoal/90 backdrop-blur-sm text-white text-xs uppercase tracking-[0.12em] font-sans font-medium hover:bg-charcoal transition-colors"
          >
            <ShoppingBag size={14} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </div>

      <div className={compact ? 'text-center' : ''}>
        <h3 className="product-name mb-1.5">{product.name}</h3>
        <div className="flex items-center gap-2 mb-1.5" style={{ justifyContent: compact ? 'center' : 'flex-start' }}>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={11}
                fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                className={i < Math.floor(product.rating) ? 'text-gold-400' : 'text-charcoal/20'}
              />
            ))}
          </div>
          <span className="text-[11px] text-charcoal/40 font-sans">
            ({product.reviewCount})
          </span>
        </div>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
}
