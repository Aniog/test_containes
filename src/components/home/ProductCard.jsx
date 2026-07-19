import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();
  const navigate = useNavigate();

  return (
    <div
      className="group relative flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative aspect-[3/4] bg-velmora-cream overflow-hidden cursor-pointer"
        onClick={() => navigate(`/product/${product.id}`)}
        role="link"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter') navigate(`/product/${product.id}`);
        }}
        aria-label={`View ${product.name}`}
      >
        {/* Placeholder image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
          style={{
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800"><rect fill="%23F5F0EA" width="600" height="800"/><rect x="200" y="300" width="200" height="200" rx="100" fill="%23C9A96E" opacity="0.25"/><rect x="240" y="340" width="120" height="120" rx="60" fill="%23C9A96E" opacity="0.35"/><circle cx="300" cy="400" r="30" fill="%23fff" opacity="0.3"/></svg>')`,
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />
        {/* Hover second image overlay */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800"><rect fill="%23EBE3D8" width="600" height="800"/><rect x="220" y="320" width="160" height="160" rx="80" fill="%23C9A96E" opacity="0.3"/><circle cx="300" cy="400" r="20" fill="%232C2420" opacity="0.1"/></svg>')`,
          }}
        />

        {/* Quick add */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-400 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              addItem(product, 1, 'gold');
            }}
            className="w-full bg-white/95 backdrop-blur-sm text-velmora-ink py-2.5 text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-velmora-ink hover:text-white transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-3 flex flex-col gap-1">
        <button
          onClick={() => navigate(`/product/${product.id}`)}
          className="text-left"
        >
          <h3 className="font-serif text-sm tracking-wide uppercase text-velmora-ink group-hover:text-velmora-golddark transition-colors">
            {product.name}
          </h3>
        </button>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-velmora-ink">${product.price}</span>
          <div className="flex items-center gap-0.5">
            <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
            <span className="text-[11px] text-velmora-stone">{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
