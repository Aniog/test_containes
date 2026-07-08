import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product, onAdd }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (typeof onAdd === 'function') {
      onAdd(product, product.variants[0]);
    } else {
      addItem(product, product.variants[0]);
    }
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-brand-warm rounded-sm mb-4">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-brand-warm animate-pulse" />
        )}
        <img
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 ease-out ${
            isHovered ? 'scale-105' : 'scale-100'
          } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <button
            onClick={handleAddToCart}
            className="w-full bg-white/95 backdrop-blur-sm text-brand-ink text-xs tracking-widest uppercase py-3 rounded-sm hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-lg"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="text-sm tracking-widest uppercase text-brand-ink font-medium group-hover:text-brand-accent transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-1">
          <Star className="w-3.5 h-3.5 fill-brand-accent text-brand-accent" />
          <span className="text-xs text-brand-muted">{product.rating}</span>
          <span className="text-xs text-brand-subtle">({product.reviewCount})</span>
        </div>
        <p className="text-sm text-brand-ink">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
