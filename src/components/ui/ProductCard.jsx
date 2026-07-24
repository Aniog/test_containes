import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import StarRating from './StarRating';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, index = 0 }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      return ImageHelper.loadImages(strkImgConfig, cardRef.current);
    }
  }, []);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      ref={cardRef}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-cream-200 overflow-hidden mb-4">
        <img
          data-strk-img-id={`${product.imgId}-card-${index}`}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
          loading="lazy"
        />
        <img
          data-strk-img-id={`${product.imgIdAlt}-card-${index}`}
          data-strk-img={`[${product.descId}] [${product.titleId}] worn jewelry model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} styled`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          loading="lazy"
        />

        {/* Add to cart overlay */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className={`w-full flex items-center justify-center gap-2 py-3 text-xs tracking-widest uppercase font-sans font-medium transition-all duration-300 ${
              added
                ? 'bg-green-700 text-white'
                : 'bg-walnut-900/90 backdrop-blur-sm text-cream-100 hover:bg-gold-700'
            }`}
          >
            <ShoppingBag size={14} />
            {added ? 'Added!' : 'Add to Bag'}
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="space-y-1.5">
        <h3 className="product-name text-sm md:text-base leading-tight">{product.name}</h3>
        <StarRating rating={product.rating} showCount count={product.reviewCount} size={12} />
        <p className="font-sans text-sm text-walnut-700">${product.price}</p>
      </div>
    </Link>
  );
}
