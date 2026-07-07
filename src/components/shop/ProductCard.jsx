import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product, index = 0 }) {
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-velmora-border-light overflow-hidden mb-4">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={product.searchQuery || `${product.name} ${product.description}`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Quick Add Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <button
            onClick={handleAddToCart}
            className="w-full py-3 bg-velmora-deep/90 backdrop-blur-sm text-white font-sans text-xs tracking-wider uppercase hover:bg-velmora-gold transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-1.5">
        <h3 id={`${product.id}-name`} className="product-name">{product.name}</h3>
        <p id={`${product.id}-desc`} className="font-sans text-xs text-velmora-muted line-clamp-1">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-sans text-sm font-medium text-velmora-charcoal">
            ${product.price}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-velmora-gold text-velmora-gold" />
            <span className="font-sans text-xs text-velmora-muted">
              {product.rating} ({product.reviewCount})
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
