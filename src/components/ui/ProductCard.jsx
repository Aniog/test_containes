import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product, showBadge = true }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
  };

  return (
    <div
      ref={containerRef}
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        {/* Image */}
        <div className="relative aspect-[3/4] bg-[var(--velmora-bg-alt)] mb-4 overflow-hidden">
          <img
            data-strk-img-id={`${product.images[0].id}-card`}
            data-strk-img={`gold jewelry ${product.name} ${product.description}`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: hovered ? 0 : 1 }}
          />
          <img
            data-strk-img-id={`${product.images[1].id}-card-hover`}
            data-strk-img={`gold jewelry ${product.name} closeup detail`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: hovered ? 1 : 0 }}
          />

          {/* Badge */}
          {showBadge && product.badge && (
            <span className="absolute top-3 left-3 px-3 py-1 bg-[var(--velmora-dark)] text-white text-[10px] tracking-[0.15em] uppercase">
              {product.badge}
            </span>
          )}

          {/* Quick add */}
          <div className={`absolute bottom-0 left-0 right-0 p-3 transition-transform duration-300 ${hovered ? 'translate-y-0' : 'translate-y-full'}`}>
            <button
              className="btn-accent w-full text-xs py-3"
              onClick={handleAddToCart}
            >
              <ShoppingBag size={14} className="mr-2" />
              Add to Cart
            </button>
          </div>
        </div>

        {/* Info */}
        <div>
          <h3 id={`${product.id}-card-title`} className="product-name text-sm mb-1 group-hover:text-[var(--velmora-accent)] transition-colors">
            {product.name}
          </h3>
          <p id={`${product.id}-card-desc`} className="text-xs text-[var(--velmora-text-muted)] mb-2">
            {product.description}
          </p>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className={i < Math.floor(product.rating) ? 'text-[var(--velmora-gold)] fill-[var(--velmora-gold)]' : 'text-[var(--velmora-border)]'}
                />
              ))}
            </div>
            <span className="text-xs text-[var(--velmora-text-light)]">({product.reviews})</span>
          </div>
          <p className="text-sm font-medium mt-2">${product.price.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  );
}
