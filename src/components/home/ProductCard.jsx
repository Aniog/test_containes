import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem, openCart } = useCart();

  const imgIdBase = `bestseller-${product.id}`;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      productId: product.id,
      variant: product.variants[0],
      price: product.price,
      quantity: 1,
    });
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
      <div className="relative overflow-hidden bg-charcoal-100 aspect-[3/4] mb-4">
        {/* Default image */}
        <div
          data-strk-bg-id={`${imgIdBase}-1`}
          data-strk-bg={`[${imgIdBase}-name] gold jewelry`}
          data-strk-bg-ratio="3x4"
          data-strk-bg-width="600"
          className={`absolute inset-0 transition-opacity duration-500 ${isHovered && product.variants.length > 1 ? 'opacity-0' : 'opacity-100'}`}
        />
        {/* Hover image (second variant) */}
        {product.variants.length > 1 && (
          <div
            data-strk-bg-id={`${imgIdBase}-2`}
            data-strk-bg={`[${imgIdBase}-name] gold jewelry alternative view`}
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="600"
            className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          />
        )}

        {/* Quick add */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-3 left-3 right-3 py-3 text-center text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
            added
              ? 'bg-warm-600 text-white'
              : 'bg-cream-50/90 backdrop-blur-sm text-charcoal-800 opacity-0 group-hover:opacity-100 hover:bg-charcoal-800 hover:text-cream-50'
          }`}
        >
          {added ? 'Added ✓' : 'Add to Cart'}
        </button>
      </div>

      {/* Info */}
      <p
        id={`${imgIdBase}-name`}
        className="font-serif text-sm font-semibold tracking-widest uppercase text-charcoal-900 leading-snug"
      >
        {product.name}
      </p>
      <p className="text-xs text-charcoal-500 mt-1">{product.subcategory}</p>
      <div className="flex items-center gap-1.5 mt-2">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-warm-500 text-warm-500' : 'text-charcoal-200 fill-charcoal-200'}`}
            />
          ))}
        </div>
        <span className="text-[11px] text-charcoal-400">({product.reviewCount})</span>
      </div>
      <p className="font-sans text-sm font-medium text-charcoal-800 mt-1.5">${product.price}</p>
    </Link>
  );
}
