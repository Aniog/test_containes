import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAdd = (e) => {
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
      <div className="relative aspect-[3/4] bg-velmora-muted overflow-hidden mb-5">
        {/* First image / primary */}
        <div className={`absolute inset-0 bg-velmora-surface transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}>
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-br from-velmora-accent-light via-velmora-accent/30 to-velmora-muted opacity-50" />
          </div>
        </div>
        {/* Second image on hover */}
        <div className={`absolute inset-0 bg-velmora-muted transition-opacity duration-500 flex items-center justify-center ${hovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-2/3 h-2/3 rounded-full bg-gradient-to-tl from-velmora-accent/20 via-velmora-accent-light/60 to-velmora-accent/40 opacity-60" />
        </div>

        {/* Quick add button */}
        <div className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <button
            onClick={handleAdd}
            className="w-full flex items-center justify-center gap-2 py-2.5 bg-white/90 backdrop-blur-sm text-velmora-dark text-xs tracking-wider uppercase font-sans hover:bg-white transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Quick Add
          </button>
        </div>

        {/* Category badge */}
        <span className="absolute top-3 left-3 text-[9px] tracking-widest uppercase font-sans bg-velmora-base/90 backdrop-blur-sm text-velmora-subtle px-2.5 py-1">
          {product.category}
        </span>
      </div>

      {/* Info */}
      <div>
        <div className="flex items-center gap-1 mb-1.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-velmora-accent text-velmora-accent' : 'fill-velmora-muted text-velmora-muted'}`}
            />
          ))}
          <span className="text-[10px] text-velmora-subtle ml-1.5 font-sans">({product.reviewCount})</span>
        </div>
        <h3 className="font-serif text-sm tracking-wider uppercase text-velmora-dark leading-tight mb-1">
          {product.name}
        </h3>
        <p className="font-sans text-sm text-velmora-body">${product.price}</p>
      </div>
    </Link>
  );
}
