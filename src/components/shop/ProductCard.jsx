import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addItem, toggleCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold');
    toggleCart();
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden rounded-sm bg-brand-warm aspect-[3/4]">
        {!imageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-brand-border/50" />
        )}
        <img
          src={hovered ? product.images[1] : product.images[0]}
          alt={product.name}
          onLoad={() => setImageLoaded(true)}
          className={`h-full w-full object-cover transition-all duration-700 ease-out ${
            hovered ? 'scale-105' : 'scale-100'
          } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-brand-surface/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest text-brand-gold font-semibold">
            {product.badge}
          </span>
        )}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 bg-brand-surface/95 backdrop-blur-sm py-3 text-xs uppercase tracking-widest text-brand-text opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-brand-gold hover:text-white"
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="font-serif text-base text-brand-text group-hover:text-brand-gold transition-colors">
          {product.name.toUpperCase()}
        </h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            <Star className="h-3.5 w-3.5 fill-brand-gold text-brand-gold" />
            <span className="text-xs text-brand-muted">{product.rating}</span>
          </div>
          <span className="text-xs text-brand-subtle">({product.reviewCount})</span>
        </div>
        <p className="text-sm font-medium text-brand-text">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
