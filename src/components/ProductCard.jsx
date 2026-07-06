import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, showQuickAdd = true }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image */}
        <div className="relative aspect-[3/4] bg-parchment rounded-sm overflow-hidden">
          <img
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            data-strk-img-id={`product-card-${product.id}`}
            data-strk-img={`[product-name-${product.id}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <div
            className={`absolute inset-0 bg-black/10 transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
          {showQuickAdd && (
            <button
              onClick={(e) => {
                e.preventDefault();
                addItem(product, 1, 'gold');
              }}
              className={`absolute bottom-3 left-3 right-3 py-2.5 bg-cream/90 backdrop-blur-sm text-charcoal text-xs font-medium tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Quick Add
            </button>
          )}
          <span id={`product-name-${product.id}`} className="sr-only">{product.name} gold jewelry</span>
        </div>

        {/* Info */}
        <div className="mt-3 text-center">
          <h3 className="font-serif text-sm tracking-widest uppercase text-charcoal">
            {product.name}
          </h3>
          <div className="flex items-center justify-center gap-1.5 mt-1">
            <Star className="w-3 h-3 fill-gold text-gold" />
            <span className="text-xs text-warmgray">{product.rating}</span>
            <span className="text-xs text-taupe">({product.reviews})</span>
          </div>
          <p className="mt-1 font-serif text-sm text-charcoal">${product.price}</p>
        </div>
      </Link>
    </div>
  );
}
