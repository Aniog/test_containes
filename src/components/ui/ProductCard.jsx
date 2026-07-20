import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const [adding, setAdding] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setAdding(true);
    addItem(product, product.variants?.[0] ?? 'Gold Tone');
    setTimeout(() => setAdding(false), 1200);
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      {/* Image container */}
      <div className="product-card relative overflow-hidden bg-ivory-dark aspect-portrait mb-4">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="product-img-primary w-full h-full object-cover"
        />
        {/* Secondary image */}
        <img
          data-strk-img-id={product.img2Id}
          data-strk-img={`[${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} — alternate view`}
          className="product-img-secondary w-full h-full object-cover"
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags?.includes('new') && (
            <span className="bg-ivory text-espresso font-sans text-[9px] uppercase tracking-[0.12em] px-2 py-1">
              New
            </span>
          )}
          {product.tags?.includes('bestseller') && (
            <span className="bg-gold text-espresso font-sans text-[9px] uppercase tracking-[0.12em] px-2 py-1">
              Bestseller
            </span>
          )}
        </div>

        {/* Quick add — appears on hover */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <button
            onClick={handleAdd}
            className="w-full bg-espresso text-ivory font-sans text-xs uppercase tracking-[0.12em] py-3.5 hover:bg-espresso-light transition-colors duration-300"
          >
            {adding ? 'Added ✓' : 'Quick Add'}
          </button>
        </div>
      </div>

      {/* Info */}
      <div>
        {/* Hidden text for image queries */}
        <p id={product.titleId} className="font-serif text-sm uppercase tracking-[0.12em] text-espresso leading-snug">
          {product.name}
        </p>
        <p id={product.descId} className="sr-only">{product.shortDesc}</p>

        <div className="flex items-center gap-1.5 mt-1.5 mb-1">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={10}
                className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-stone-light'}
                strokeWidth={0}
                fill={i < Math.floor(product.rating) ? '#C9A96E' : 'none'}
              />
            ))}
          </div>
          <span className="font-sans text-xs text-stone">({product.reviewCount})</span>
        </div>

        <p className="font-sans text-sm font-medium text-espresso">${product.price}</p>
      </div>
    </Link>
  );
}
