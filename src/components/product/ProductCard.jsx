import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants?.[0] || 'Gold');
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-velmora-100 overflow-hidden rounded-sm">
        <img
          src={product.image}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-luxury ${
            hovered && product.imageHover ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
          loading="lazy"
        />
        {product.imageHover && (
          <img
            src={product.imageHover}
            alt={`${product.name} - alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-luxury ${
              hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            loading="lazy"
          />
        )}

        {/* Quick add overlay */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full flex items-center justify-center gap-2 bg-white/95 backdrop-blur-sm text-velmora-900 py-2.5 text-xs font-semibold tracking-wide uppercase hover:bg-gold hover:text-white transition-colors duration-200 shadow-lg"
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="mt-3 space-y-1">
        <h3 className="font-serif text-sm md:text-[15px] tracking-product uppercase text-velmora-900 group-hover:text-gold transition-colors duration-300 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-xs text-velmora-400 line-clamp-1 hidden md:block">
          {product.description}
        </p>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-velmora-900">${product.price}</span>
          <div className="flex items-center gap-0.5">
            <Star size={10} className="fill-gold text-gold" />
            <span className="text-[11px] text-velmora-400">{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
