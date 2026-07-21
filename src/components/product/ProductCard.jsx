import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold', 1);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-charcoal-100 overflow-hidden mb-4">
        {/* Primary image */}
        <img
          data-strk-img-id={product.images[0].id}
          data-strk-img={`[${product.name.replace(/\s+/g, '-').toLowerCase()}-name]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.images[0].alt}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Hover image */}
        <img
          data-strk-img-id={product.images[1].id}
          data-strk-img={`[${product.name.replace(/\s+/g, '-').toLowerCase()}-name] worn`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.images[1].alt}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-gold-500 text-cream-50 text-[10px] tracking-[0.15em] uppercase font-sans px-3 py-1">
              New
            </span>
          )}
        </div>

        {/* Quick add button */}
        <div
          className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={handleQuickAdd}
            className="w-full bg-charcoal-800/90 backdrop-blur-sm text-cream-50 py-3 flex items-center justify-center gap-2 text-xs tracking-[0.15em] uppercase font-sans hover:bg-charcoal-800 transition-colors"
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div id={product.name.replace(/\s+/g, '-').toLowerCase() + '-name'} className="px-1">
        <h3 className="font-serif text-base md:text-lg uppercase tracking-[0.15em] text-charcoal-800 group-hover:text-gold-700 transition-colors duration-300 line-clamp-2">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-1.5 mt-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className={i < Math.floor(product.rating) ? 'fill-gold-500 text-gold-500' : 'text-charcoal-200'}
              />
            ))}
          </div>
          <span className="text-xs text-charcoal-400">({product.reviewCount})</span>
        </div>

        <p className="font-sans text-sm font-medium text-charcoal-700 mt-2">
          ${product.price.toFixed(2)}
        </p>

        {/* Color variants */}
        <div className="flex items-center gap-2 mt-3">
          {product.variants.map(variant => (
            <div
              key={variant.id}
              className="w-4 h-4 rounded-full border border-charcoal-200 cursor-pointer hover:scale-110 transition-transform"
              style={{ backgroundColor: variant.color }}
              title={variant.name}
            />
          ))}
        </div>
      </div>
    </Link>
  );
}
