import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-square bg-warmgray overflow-hidden mb-4">
        <div className="w-full h-full bg-warmgray flex items-center justify-center">
          <span className="font-serif text-4xl text-gold/20">{product.name.charAt(0)}</span>
        </div>

        {/* Quick add button */}
        <button
          onClick={handleQuickAdd}
          className={`absolute bottom-3 left-3 right-3 py-3 text-center text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
            added
              ? 'bg-gold text-cream'
              : 'bg-cream/95 text-espresso opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0'
          }`}
        >
          {added ? 'Added to Bag' : (
            <span className="flex items-center justify-center gap-2">
              <ShoppingBag size={14} />
              Add to Cart
            </span>
          )}
        </button>

        {/* Tags */}
        {product.tags.includes('new') && (
          <span className="absolute top-3 left-3 bg-cream text-espresso text-[10px] tracking-widest uppercase px-2.5 py-1">
            New
          </span>
        )}
        {product.tags.includes('bestseller') && (
          <span className="absolute top-3 right-3 bg-gold text-cream text-[10px] tracking-widest uppercase px-2.5 py-1">
            Bestseller
          </span>
        )}
      </div>

      {/* Info */}
      <div className="text-center">
        <p className="product-name text-espresso mb-1" id={`card-name-${product.id}`}>
          {product.name}
        </p>
        <div className="flex items-center justify-center gap-1 mb-1.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={11}
              className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'fill-borderline text-borderline'}
            />
          ))}
          <span className="text-[11px] text-taupe ml-1">({product.reviewCount})</span>
        </div>
        <p className="font-sans text-sm text-espresso font-medium">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}