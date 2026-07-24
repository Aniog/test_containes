import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ProductCard = ({ product }) => {
  const { addItem } = useCart();
  const cardRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, cardRef.current);
  }, []);

  return (
    <div ref={cardRef}>
      <Link to={`/product/${product.id}`} className="group block">
        <div className="relative aspect-[3/4] bg-velmora-sand overflow-hidden mb-3">
          <img
            data-strk-img-id={`shop-${product.id}`}
            data-strk-img={`[shop-${product.id}-name] [shop-${product.id}-subtitle]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {product.badge && (
            <span className="absolute top-3 left-3 bg-velmora-ink/80 text-velmora-cream text-[10px] uppercase tracking-wider px-3 py-1">
              {product.badge}
            </span>
          )}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              const availableVariant = product.variants.find((v) => v.available);
              if (availableVariant) {
                addItem(product, availableVariant.id);
              }
            }}
            className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm text-velmora-ink py-3 text-xs uppercase tracking-widest font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Quick Add
          </button>
        </div>

        <div className="text-center">
          <p
            id={`shop-${product.id}-name`}
            className="font-serif text-xs uppercase tracking-widest-xl text-velmora-ink mb-1"
          >
            {product.name}
          </p>
          <p
            id={`shop-${product.id}-subtitle`}
            className="text-xs text-velmora-taupe mb-2"
          >
            {product.subtitle}
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center gap-0.5">
              <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
              <span className="text-xs text-velmora-brown">
                {product.rating}
              </span>
            </div>
            <span className="text-velmora-stone">|</span>
            <span className="text-sm font-medium text-velmora-ink">
              ${product.price}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
