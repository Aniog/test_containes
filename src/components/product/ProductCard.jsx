import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import useCartStore from '@/store/cartStore';

export default function ProductCard({ product, index = 0 }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((s) => s.addItem);
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      return ImageHelper.loadImages(strkImgConfig, cardRef.current);
    }
  }, []);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0].name);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const imgId1 = `product-${product.id}-1`;
  const imgId2 = `product-${product.id}-2`;
  const titleId = `product-${product.id}-title`;

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div ref={cardRef} className="relative">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-velvet-100 overflow-hidden rounded-sm">
          {/* Primary image */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              hovered ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <img
              data-strk-img-id={imgId1}
              data-strk-img={`[${titleId}] product jewelry warm lighting elegant dark background`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={product.images[0].alt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Secondary image (hover) */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              data-strk-img-id={imgId2}
              data-strk-img={`[${titleId}] detail close up product jewelry elegant`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={product.images[1].alt}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Badges */}
          {product.new && (
            <span className="absolute top-3 left-3 bg-gold-500 text-white text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-1">
              New
            </span>
          )}

          {/* Quick add button */}
          <button
            onClick={handleAddToCart}
            className={`absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 py-2.5 
              bg-velvet-950/90 backdrop-blur-sm text-ivory-50 text-[11px] font-medium tracking-[0.15em] uppercase
              transition-all duration-300 ${
              hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            } hover:bg-velvet-950`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            {added ? 'Added!' : 'Add to Cart'}
          </button>
        </div>

        {/* Product info */}
        <div className="mt-3.5 space-y-1">
          <h3 id={titleId} className="text-product-name text-xs sm:text-sm text-velvet-950">
            {product.name}
          </h3>
          <p className="text-sm font-medium text-velvet-950">
            ${product.price}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(product.rating)
                      ? 'text-gold-400'
                      : 'text-velvet-200'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-[10px] text-obsidian-muted">
              ({product.reviewCount})
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
