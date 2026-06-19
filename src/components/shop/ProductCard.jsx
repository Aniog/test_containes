import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../lib/utils';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const mainImage = product.images[0];
  const altImage = product.images[1];

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-muted aspect-[4/5]">
        {/* Main image */}
        <img
          data-strk-img-id={`card-${product.id}-1`}
          data-strk-img={`[${product.id}-name] [product-section-title]`}
          data-strk-img-ratio={mainImage.ratio}
          data-strk-img-width={mainImage.width}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        {/* Hover image */}
        <img
          data-strk-img-id={`card-${product.id}-2`}
          data-strk-img={`[${product.id}-name] detail closeup`}
          data-strk-img-ratio={altImage.ratio}
          data-strk-img-width={altImage.width}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-surface text-fg text-[10px] font-medium tracking-[0.15em] uppercase px-2.5 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick add button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addItem(product, product.colors[0]);
          }}
          className={`absolute bottom-3 left-3 right-3 bg-surface/95 backdrop-blur-sm text-fg py-2.5 flex items-center justify-center gap-2 text-xs font-medium tracking-[0.1em] uppercase transition-all duration-300 hover:bg-accent hover:text-accent-fg ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Add to Cart
        </button>
      </Link>

      {/* Info */}
      <div className="pt-3">
        <Link to={`/product/${product.slug}`}>
          <h3 id={`${product.id}-name`} className="text-xs font-medium tracking-product uppercase text-fg font-sans hover:text-accent transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-muted-fg mt-1 font-medium">{formatPrice(product.price)}</p>
      </div>
    </div>
  );
}
