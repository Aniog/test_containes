import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-brand-bg">
          <img
            src={hovered ? product.images[1] : product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover transition-opacity duration-500"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80';
            }}
          />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-center p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <button
              onClick={(e) => {
                e.preventDefault();
                addItem(product, product.variants[0]);
              }}
              className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-brand-ink backdrop-blur hover:bg-white transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className="mt-3">
          <h3 className="font-serif text-base font-semibold text-brand-ink uppercase tracking-wide">{product.name}</h3>
          <div className="mt-1 flex items-center gap-2">
            <div className="flex text-brand-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-3 w-3 ${i < Math.round(product.rating) ? 'fill-current' : 'text-brand-border'}`} />
              ))}
            </div>
            <span className="text-xs text-brand-muted">${product.price}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
