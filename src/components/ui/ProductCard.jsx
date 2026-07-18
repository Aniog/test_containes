import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import StarRating from './StarRating';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, priority = false }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem, openDrawer } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0], 1);
    setAdded(true);
    openDrawer();
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
      <div className="relative aspect-[3/4] bg-sand overflow-hidden mb-4">
        <img
          alt={product.shortName}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Quick add button */}
        <button
          onClick={handleAdd}
          className={`absolute bottom-3 right-3 w-9 h-9 bg-warmwhite rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          } hover:bg-gold hover:text-warmwhite`}
          aria-label={`Add ${product.shortName} to cart`}
        >
          <Plus size={16} />
        </button>
        {added && (
          <div className="absolute inset-0 bg-espresso/30 flex items-center justify-center animate-fade-in">
            <span className="text-warmwhite text-xs tracking-wider uppercase font-semibold">Added!</span>
          </div>
        )}
        {/* Hidden text for image search */}
        <span className="sr-only" id={product.titleId}>{product.shortName}</span>
        <span className="sr-only" id={product.descId}>{product.description}</span>
      </div>

      {/* Info */}
      <h3 className="font-serif text-sm tracking-wider font-semibold text-espresso mb-1">
        {product.name}
      </h3>
      <StarRating rating={product.rating} count={product.reviewCount} />
      <p className="text-sm font-medium text-mocha mt-1.5">
        ${product.price}
      </p>
    </Link>
  );
}
