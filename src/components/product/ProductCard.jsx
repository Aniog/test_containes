import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-ivory overflow-hidden mb-3">
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            data-strk-img-id={product.imgId2}
            data-strk-img={`[${product.titleId}] gold jewelry worn on model`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>

        {/* Info */}
        <h3 id={product.titleId} className="font-sans text-[11px] md:text-xs uppercase tracking-product text-charcoal">
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">{product.description}</p>
        <p className="mt-1 text-sm font-sans text-muted">${product.price}</p>
      </Link>

      {/* Quick add button on hover */}
      <button
        onClick={(e) => {
          e.preventDefault();
          addItem(product);
        }}
        className={`absolute bottom-[72px] left-2 right-2 bg-white/95 backdrop-blur-sm text-charcoal py-2 text-xs uppercase tracking-widest font-sans font-medium border border-border hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
      >
        Add to Cart
      </button>
    </div>
  );
}
