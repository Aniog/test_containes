import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1, 'gold');
  };

  const titleId = `product-title-${product.id}`;
  const descId = `product-desc-${product.id}`;

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-base overflow-hidden mb-4">
        <img
          data-strk-img-id={product.images[0]?.id || `card-${product.id}`}
          data-strk-img={`[${descId}] [${titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
            hovered ? 'scale-105' : 'scale-100'
          }`}
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-accent text-base text-[10px] uppercase tracking-[0.15em] px-2.5 py-1 font-medium">
            {product.badge}
          </span>
        )}
        <button
          onClick={handleAdd}
          className={`absolute bottom-3 left-3 right-3 bg-primary text-base py-2.5 text-xs uppercase tracking-[0.15em] font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
          }`}
        >
          <ShoppingBag size={14} />
          Add to Cart
        </button>
      </div>
      <div className="space-y-1">
        <h3
          id={titleId}
          className="font-serif text-sm uppercase tracking-[0.2em] text-primary truncate"
        >
          {product.name}
        </h3>
        <p id={descId} className="hidden">{product.description}</p>
        <div className="flex items-center gap-2">
          <span className="text-sm text-primary font-medium">${product.price}</span>
          <div className="flex items-center gap-0.5">
            <Star size={11} className="fill-accent text-accent" />
            <span className="text-[11px] text-secondary">{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
