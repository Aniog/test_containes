import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants?.[0] || null);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <Link to={`/product/${product.slug}`} className="group block">
      {/* Image container */}
      <div className="relative overflow-hidden bg-blush/30 aspect-[3/4] mb-4">
        {/* Primary image */}
        <img
          id={product.imgId}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-600 group-hover:opacity-0"
        />
        {/* Hover / second image */}
        <img
          id={product.imgId2}
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry editorial close up`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate view`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-600 group-hover:opacity-100 scale-105"
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags?.includes('bestseller') && (
            <span className="bg-gold text-obsidian text-[9px] font-manrope uppercase tracking-widest px-2 py-1">
              Bestseller
            </span>
          )}
          {product.tags?.includes('new') && (
            <span className="bg-obsidian text-parchment text-[9px] font-manrope uppercase tracking-widest px-2 py-1">
              New
            </span>
          )}
        </div>

        {/* Quick add button */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={handleAddToCart}
            className={`w-full py-3 text-[10px] font-manrope uppercase tracking-widest font-medium transition-colors duration-200 ${
              added
                ? 'bg-charcoal text-parchment'
                : 'bg-obsidian text-parchment hover:bg-gold hover:text-obsidian'
            }`}
          >
            {added ? 'Added ✓' : 'Quick Add'}
          </button>
        </div>
      </div>

      {/* Info */}
      <div>
        <p
          id={product.titleId}
          className="text-xs font-manrope uppercase tracking-widest text-charcoal font-medium mb-1 leading-tight"
        >
          {product.name}
        </p>
        <p
          id={product.descId}
          className="text-xs font-manrope text-stone mb-2 leading-snug line-clamp-1"
        >
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-manrope font-medium text-charcoal">${product.price}</span>
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={10}
                  className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-blush fill-blush'}
                />
              ))}
            </div>
            <span className="text-[10px] font-manrope text-stone">({product.reviewCount})</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
