import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import JewelryPlaceholder from '../ui/JewelryPlaceholder';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const img1 = product.images[0];
  const img2 = product.images[1] || product.images[0];

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative overflow-hidden bg-cream mb-4">
        {/* Primary image */}
        <div className={`transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}>
          <JewelryPlaceholder bg={img1.bg} label={img1.label} ratio="4x3" />
        </div>
        {/* Hover image */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
          <JewelryPlaceholder bg={img2.bg} label={img2.label} ratio="4x3" />
        </div>

        {/* Quick add button */}
        <div className={`absolute bottom-0 left-0 right-0 transition-transform duration-300 ${hovered ? 'translate-y-0' : 'translate-y-full'}`}>
          <button
            onClick={handleAddToCart}
            className="w-full flex items-center justify-center gap-2 py-3 font-sans text-xs font-semibold uppercase tracking-widest transition-all duration-200"
            style={added
              ? { backgroundColor: '#1A1714', color: '#C9A96E' }
              : { backgroundColor: '#C9A96E', color: '#1A1714' }
            }
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>

        {/* Bestseller tag */}
        {product.tags.includes('bestseller') && (
          <div className="absolute top-3 left-3">
            <span className="font-sans text-[10px] font-semibold uppercase tracking-widest px-2 py-1" style={{ backgroundColor: '#C9A96E', color: '#1A1714' }}>
              Bestseller
            </span>
          </div>
        )}
      </div>

      {/* Product info */}
      <div className="space-y-1.5">
        <p className="font-sans text-[10px] font-semibold uppercase tracking-widest text-ink-faint">
          {product.category}
        </p>
        <h3 className="font-serif text-base uppercase tracking-[0.12em] text-ink group-hover:text-gold transition-colors duration-200 leading-tight">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <p className="font-sans text-base font-semibold text-ink">
            ${product.price}
          </p>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3" fill="#C9A96E" stroke="#C9A96E" />
            <span className="font-sans text-xs text-ink-muted">{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
