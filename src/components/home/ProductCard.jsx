import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [imgIdx, setImgIdx] = useState(0);
  const { addItem } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.colors[0]);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < Math.floor(rating) ? 'text-gold-400' : 'text-warm-700'}>
        ★
      </span>
    ));
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => {
        setHovered(true);
        if (product.images.length > 1) setImgIdx(1);
      }}
      onMouseLeave={() => {
        setHovered(false);
        setImgIdx(0);
      }}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-velvet-800">
        <img
          src={product.images[imgIdx]}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'scale-105' : 'scale-100'
          }`}
        />
        {/* Quick add button */}
        <button
          onClick={handleAdd}
          className={`absolute bottom-3 right-3 w-9 h-9 rounded-full bg-velvet-950/80 backdrop-blur-sm border border-warm-600/40 flex items-center justify-center text-gold-400 hover:bg-gold-500 hover:text-velvet-950 hover:border-gold-500 transition-all duration-300 z-10 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
          aria-label="Add to cart"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* Info */}
      <div className="mt-4 space-y-1.5">
        <h3 className="font-serif text-xs md:text-sm tracking-[0.15em] uppercase text-warm-200 group-hover:text-gold-400 transition-colors leading-tight">
          {product.name}
        </h3>
        <div className="flex items-center gap-1 text-xs">
          {renderStars(product.rating)}
          <span className="text-warm-500 ml-1">({product.reviewCount})</span>
        </div>
        <p className="text-sm text-gold-400 font-medium">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}
