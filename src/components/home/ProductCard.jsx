import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addItem, setCartOpen } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
    setCartOpen(true);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-brand-warm">
        <img
          src={hovered ? product.images[1] : product.images[0]}
          alt={product.name}
          className={`h-full w-full object-cover transition-all duration-700 ease-out ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-brand-warm animate-pulse" />
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        <button
          onClick={handleAddToCart}
          className="absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 rounded-full bg-white/90 backdrop-blur-sm py-2.5 text-xs font-semibold text-brand-ink opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-white"
        >
          <ShoppingBag className="h-3.5 w-3.5" />
          Add to Cart
        </button>
      </div>
      <div className="mt-4">
        <h3 className="product-name text-sm">{product.name}</h3>
        <div className="mt-1 flex items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-brand-gold text-brand-gold" />
          <span className="text-xs text-brand-muted">{product.rating} ({product.reviewCount})</span>
        </div>
        <p className="mt-2 text-sm font-medium text-brand-ink">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
