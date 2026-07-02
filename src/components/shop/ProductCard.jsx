import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block no-underline">
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden bg-linen">
          <img
            src={hovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {product.badge && (
            <span className="absolute top-3 left-3 bg-cream/90 text-charcoal text-[10px] uppercase tracking-widest-plus px-3 py-1 font-sans">
              {product.badge}
            </span>
          )}
        </div>

        {/* Info */}
        <div className="mt-3 text-center">
          <h3 className="font-serif text-sm uppercase tracking-widest-plus text-charcoal">
            {product.name}
          </h3>
          <p className="text-sm text-taupe mt-1">${product.price}</p>
        </div>
      </Link>

      {/* Quick add */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          addItem(product);
        }}
        className="absolute bottom-[72px] left-1/2 -translate-x-1/2 bg-charcoal text-cream text-xs uppercase tracking-widest-plus px-6 py-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 hover:bg-gold whitespace-nowrap"
      >
        Add to Cart
      </button>
    </div>
  );
}
