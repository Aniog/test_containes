import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold');
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-brand-warm">
        <img
          src={hovered ? product.images[1] : product.images[0]}
          alt={product.name}
          className={`h-full w-full object-cover transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-8 w-8 rounded-full border-2 border-brand-divider border-t-brand-accent animate-spin" />
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 flex justify-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button
            onClick={handleAddToCart}
            className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-brand-ink shadow-lg backdrop-blur-sm hover:bg-white"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-3 space-y-1">
        <h3 className="product-name">{product.name}</h3>
        <p className="text-sm text-brand-muted">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
