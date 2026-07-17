import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-[#F2EDE7]">
          <img
            src={product.images[0]}
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-700 ${hovered && product.images.length > 1 ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
          />
          {product.images.length > 1 && (
            <img
              src={product.images[1]}
              alt={`${product.name} alternate`}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            />
          )}
          {product.badge && (
            <span className="absolute top-3 left-3 bg-[#E8DCC8] text-[#A88B5A] text-[10px] uppercase tracking-[0.2em] px-3 py-1 font-sans font-medium">
              {product.badge}
            </span>
          )}

          <button
            onClick={(e) => { e.preventDefault(); addItem(product); }}
            className={`absolute bottom-3 left-3 right-3 bg-[#1A1A1A] text-[#FAF8F5] text-xs uppercase tracking-[0.2em] py-3 text-center font-sans font-medium transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'} hover:bg-[#C5A572]`}
          >
            Add to Cart
          </button>
        </div>
      </Link>

      <div className="mt-4">
        <Link to={`/product/${product.slug}`}>
          <h3 className="font-serif text-base md:text-lg uppercase tracking-[0.2em] text-[#1A1A1A] hover:text-[#C5A572] transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="font-sans text-sm text-[#6B6560] mt-1">${product.price}</p>
      </div>
    </div>
  );
}
