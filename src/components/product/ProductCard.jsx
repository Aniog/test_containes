import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../lib/utils';
import { useState, useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      return ImageHelper.loadImages(strkImgConfig, cardRef.current);
    }
  }, [hovered]);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0].name);
  };

  return (
    <Link
      ref={cardRef}
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-cream-200 overflow-hidden">
        {/* Primary image */}
        <img
          data-strk-img-id={`product-${product.id}-primary`}
          data-strk-img={`[${product.id}-name] [${product.id}-desc] gold jewelry product photo`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
        />

        {/* Secondary image (hover) */}
        <img
          data-strk-img-id={`product-${product.id}-secondary`}
          data-strk-img={`[${product.id}-name] worn styling detail gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={`${product.name} detail`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-ink-800 text-cream-50 text-[10px] font-sans font-medium tracking-ultra-wide uppercase px-3 py-1.5">
            {product.badge}
          </span>
        )}

        {/* Quick add button */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-4 left-1/2 -translate-x-1/2 bg-cream-50 text-ink-800 font-sans text-xs tracking-ultra-wide uppercase px-6 py-3 shadow-elevated flex items-center gap-2 transition-all duration-300 hover:bg-ink-800 hover:text-cream-50 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Add to Cart
        </button>
      </div>

      {/* Text content - hidden references for image interpolation */}
      <span id={`${product.id}-name`} className="sr-only">{product.name}</span>
      <span id={`${product.id}-desc`} className="sr-only">{product.description}</span>

      {/* Info */}
      <div className="mt-4 space-y-1">
        <h3 className="product-title">{product.name}</h3>
        <div className="flex items-center gap-3">
          <p className="product-price">{formatPrice(product.price)}</p>
          <div className="flex items-center gap-0.5">
            <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
            <span className="text-xs text-ink-300">{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
