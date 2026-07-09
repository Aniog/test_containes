import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const imageSrc = product.imageUrl || product.images?.[0] || '';

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-warm-100 overflow-hidden mb-4">
        <img
          src={imageSrc}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Quick add overlay */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <button
            onClick={handleQuickAdd}
            className={`w-full flex items-center justify-center gap-2 py-3 text-sm font-sans font-medium tracking-wider uppercase transition-all duration-300 ${
              added
                ? 'bg-green-700 text-white'
                : 'bg-white/95 backdrop-blur-sm text-warm-900 hover:bg-gold hover:text-white'
            }`}
          >
            <ShoppingBag size={16} strokeWidth={1.5} />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-1.5">
        <h3 className="font-sans text-[11px] font-semibold tracking-[0.15em] uppercase text-warm-900 group-hover:text-gold transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-xs text-warm-500">{product.subtitle}</p>

        <div className="flex items-center gap-2 pt-1">
          <span className="font-serif text-lg text-warm-900">${product.price}</span>
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={12}
                className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-warm-300'}
                strokeWidth={1.5}
              />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
