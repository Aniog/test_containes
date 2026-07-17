import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../lib/utils';

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'Gold', 1);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group relative"
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-velmora-cream mb-4">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.id}-desc] [${product.id}-title] fine jewelry`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-velmora-charcoal text-velmora-white text-[10px] font-sans uppercase tracking-[0.15em] px-3 py-1.5">
            {product.badge}
          </span>
        )}

        {/* Quick add overlay */}
        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <button
            onClick={handleAddToCart}
            className="w-full flex items-center justify-center gap-2 bg-velmora-charcoal/90 backdrop-blur-sm text-velmora-white text-caption uppercase tracking-[0.1em] py-3 hover:bg-velmora-gold hover:text-velmora-black transition-colors duration-300"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Text references for image search */}
      <span id={`${product.id}-title`} className="sr-only">{product.name}</span>
      <span id={`${product.id}-desc`} className="sr-only">{product.description}</span>

      {/* Product info */}
      <div className="text-center">
        <h3 className="product-name text-velmora-charcoal group-hover:text-velmora-gold transition-colors duration-300">
          {product.name}
        </h3>
        <p className="mt-1 font-sans text-body-sm text-velmora-muted">
          {formatPrice(product.price)}
        </p>
        {product.rating && (
          <div className="flex items-center justify-center gap-1 mt-2">
            <Star className="w-3 h-3 text-velmora-gold fill-velmora-gold" />
            <span className="text-[11px] text-velmora-muted font-sans">
              {product.rating} ({product.reviewCount})
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
