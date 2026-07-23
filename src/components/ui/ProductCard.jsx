import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Plus } from 'lucide-react';
import { useCartDispatch } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCartDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({ id: product.id, name: product.name, price: product.price, variant: product.variants[0] });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-warm-100 overflow-hidden">
        <div className="w-full h-full bg-warm-200 transition-transform duration-700 group-hover:scale-105" />

        {/* Quick add button */}
        <button
          onClick={handleAdd}
          className={`absolute bottom-4 right-4 w-10 h-10 rounded-full bg-cream-50/90 backdrop-blur-sm shadow-lg flex items-center justify-center transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          } ${added ? 'bg-gold-500 text-white' : 'text-charcoal-900 hover:bg-charcoal-900 hover:text-cream-50'}`}
          aria-label="Add to cart"
        >
          <Plus className="w-4 h-4" />
        </button>

        {/* Tags */}
        {product.tags.includes('bestseller') && (
          <span className="absolute top-3 left-3 px-2.5 py-1 bg-charcoal-900/80 backdrop-blur-sm text-cream-50 text-[10px] font-sans uppercase tracking-[0.15em]">
            Bestseller
          </span>
        )}
        {product.tags.includes('new') && (
          <span className="absolute top-3 left-3 px-2.5 py-1 bg-gold-500/90 backdrop-blur-sm text-white text-[10px] font-sans uppercase tracking-[0.15em]">
            New
          </span>
        )}
      </div>

      {/* Info */}
      <div className="mt-4 space-y-1.5">
        <h3 className="product-name text-xs md:text-sm">{product.name}</h3>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating)
                  ? 'fill-gold-400 text-gold-400'
                  : 'text-warm-300'
              }`}
            />
          ))}
          <span className="text-xs text-charcoal-500 ml-1">({product.reviewCount})</span>
        </div>
        <p className="text-sm font-sans text-charcoal-700">${product.price}</p>
      </div>
    </Link>
  );
}