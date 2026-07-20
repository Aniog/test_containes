import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import StarRating from './StarRating';
import { useCart } from '../context/CartContext';

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
        <div className="relative aspect-[3/4] overflow-hidden bg-velmora-sand">
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover transition-opacity duration-500 ease-velmora"
            style={{ opacity: hovered ? 0 : 1 }}
            loading="lazy"
          />
          <img
            src={product.hoverImage || product.images[1] || product.images[0]}
            alt={`${product.name} alternate`}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-velmora"
            style={{ opacity: hovered ? 1 : 0 }}
            loading="lazy"
          />
        </div>
      </Link>

      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          addItem(product, product.variants[0], 1);
        }}
        className="absolute bottom-4 left-4 right-4 translate-y-2 bg-velmora-espresso py-3 text-center text-xs font-medium uppercase tracking-widest text-velmora-cream opacity-0 transition-all duration-300 ease-velmora hover:bg-velmora-charcoal group-hover:translate-y-0 group-hover:opacity-100"
      >
        <span className="flex items-center justify-center gap-2">
          <ShoppingBag size={14} />
          Add to Cart
        </span>
      </button>

      <div className="mt-4 text-center">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-sm uppercase tracking-widest text-velmora-charcoal transition-colors hover:text-velmora-goldDark">
            {product.name}
          </h3>
        </Link>
        <div className="mt-1 flex items-center justify-center gap-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-xs text-velmora-taupe">({product.reviewCount})</span>
        </div>
        <p className="mt-1 font-sans text-sm font-medium text-velmora-brown">
          ${product.price}
        </p>
      </div>
    </div>
  );
}