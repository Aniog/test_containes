import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] bg-cream overflow-hidden">
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Hover overlay with quick add */}
        <div className={`absolute inset-0 bg-black/10 flex items-end justify-center pb-4 transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={(e) => { e.preventDefault(); addToCart(product); }}
            className="bg-white text-espresso text-xs uppercase tracking-widest px-5 py-2.5 flex items-center gap-2 shadow-lg hover:bg-gold hover:text-white transition-all duration-300"
          >
            <Plus className="w-3 h-3" />
            Add to Bag
          </button>
        </div>

        {/* Tags */}
        {product.tags.includes('new') && (
          <span className="absolute top-3 left-3 bg-white text-espresso text-[10px] uppercase tracking-widest px-2.5 py-1">New</span>
        )}
        {product.tags.includes('bestseller') && (
          <span className="absolute top-3 right-3 bg-gold text-white text-[10px] uppercase tracking-widest px-2.5 py-1">Bestseller</span>
        )}
      </Link>

      <div className="mt-4 text-center">
        <Link to={`/product/${product.id}`}>
          <h3
            id={product.titleId}
            className="font-serif text-xs md:text-sm uppercase tracking-widest text-espresso hover:text-gold transition-colors"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="sr-only">{product.description}</p>
        <p className="text-sm text-taupe mt-1">${product.price}</p>
      </div>
    </div>
  );
}
