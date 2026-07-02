import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-linen aspect-[3/4] mb-3">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry editorial`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} worn`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        <div
          className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={handleAdd}
            className={`w-full py-3 font-sans text-[10px] tracking-widest uppercase font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
              added ? 'bg-obsidian text-ivory' : 'bg-gold text-ivory hover:bg-gold-dark'
            }`}
          >
            <ShoppingBag size={12} />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>
      </div>

      <p
        id={product.titleId}
        className="font-serif text-sm uppercase tracking-widest text-obsidian leading-tight mb-1 group-hover:text-gold transition-colors duration-300"
      >
        {product.name}
      </p>
      <p id={product.descId} className="sr-only">{product.shortDescription}</p>
      <div className="flex items-center gap-1 mb-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={10}
            className="text-gold"
            fill={i < Math.floor(product.rating) ? '#C9A96E' : 'none'}
            stroke={i < Math.floor(product.rating) ? '#C9A96E' : '#E8DFD0'}
          />
        ))}
        <span className="font-sans text-[10px] text-muted ml-1">({product.reviewCount})</span>
      </div>
      <p className="font-sans text-sm font-medium text-obsidian">${product.price}</p>
    </Link>
  );
}
