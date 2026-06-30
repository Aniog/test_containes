import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-warm-100 overflow-hidden mb-4">
        <div className={`absolute inset-0 bg-warm-200/30 transition-opacity duration-500 ${
          hovered ? 'opacity-0' : 'opacity-100'
        }`}>
          <div className="w-full h-full flex items-center justify-center text-stone/30 text-xs uppercase tracking-widest">
            {product.name.slice(0, 3)}
          </div>
        </div>

        {/* Hover Add to Cart */}
        <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
          hovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        }`}>
          <button
            onClick={handleAddToCart}
            className="w-full bg-midnight/90 backdrop-blur-sm text-white text-xs tracking-wider uppercase py-3 px-4
                       flex items-center justify-center gap-2 hover:bg-midnight transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" strokeWidth={1.5} />
            Add to Bag
          </button>
        </div>
      </div>

      {/* Info */}
      <h3 className="font-serif text-xs tracking-widest uppercase text-charcoal mb-1">
        {product.name}
      </h3>
      <p className="text-[11px] text-stone mb-1.5">{product.tagline}</p>
      <div className="flex items-center gap-3">
        <span className="font-medium text-sm">{formatPrice(product.price)}</span>
        <div className="flex items-center gap-0.5">
          <Star className="w-3 h-3 fill-warm-500 text-warm-500" strokeWidth={1} />
          <span className="text-[11px] text-stone ml-0.5">{product.rating} ({product.reviews})</span>
        </div>
      </div>
    </Link>
  );
}
