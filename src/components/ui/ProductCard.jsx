import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative overflow-hidden bg-cream-dark aspect-[3/4] mb-4">
        {/* Primary image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        {/* Hover image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={product.img2Id}
          data-strk-img={`[${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          alt={`${product.name} worn`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags?.includes('bestseller') && (
            <span className="bg-gold text-cream font-inter text-[9px] uppercase tracking-widest px-2 py-1">
              Bestseller
            </span>
          )}
          {product.tags?.includes('new') && (
            <span className="bg-espresso text-cream font-inter text-[9px] uppercase tracking-widest px-2 py-1">
              New
            </span>
          )}
        </div>

        {/* Quick add button */}
        <div
          className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full bg-espresso text-cream font-inter text-xs uppercase tracking-widest py-3 flex items-center justify-center gap-2 hover:bg-gold transition-colors duration-200"
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="px-1">
        <h3
          id={product.titleId}
          className="font-cormorant text-base uppercase tracking-widest text-espresso leading-tight mb-1"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">{product.shortDescription}</p>

        <div className="flex items-center justify-between">
          <span className="font-inter text-sm font-medium text-espresso">
            ${product.price}
          </span>
          <div className="flex items-center gap-1">
            <Star size={11} className="fill-gold text-gold" />
            <span className="font-inter text-xs text-stone">{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
