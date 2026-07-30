import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0].value, 1);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-velmora-cream mb-4">
        {/* Primary image */}
        <img
          data-strk-img-id={`product-${product.id}-primary`}
          data-strk-img={`[${product.id}-desc] [product-${product.id}-name] gold jewelry product photo elegant dark background`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-luxury ${hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
        />
        {/* Hover image (second image) */}
        <img
          data-strk-img-id={`product-${product.id}-hover`}
          data-strk-img={`[${product.id}-desc] [product-${product.id}-name] jewelry detail closeup gold`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-luxury ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        />

        {/* Hidden text for stock image interpolation */}
        <span id={`product-${product.id}-name`} className="sr-only">{product.name}</span>
        <span id={`${product.id}-desc`} className="sr-only">{product.description}</span>

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-velmora-charcoal text-white text-caption uppercase tracking-[0.1em] rounded-pill">
            {product.badge}
          </span>
        )}

        {/* Quick add button */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 py-2.5 bg-white/95 backdrop-blur-sm text-velmora-black text-caption uppercase tracking-[0.1em] rounded-pill shadow-card transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
        >
          <ShoppingBag size={14} strokeWidth={1.5} />
          Add to Bag
        </button>
      </div>

      {/* Product info */}
      <div>
        <h3 className="font-sans text-body-sm font-medium tracking-[0.08em] uppercase text-velmora-black group-hover:text-velmora-gold transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-body-sm text-velmora-warm-gray mt-1">${product.price}</p>
      </div>
    </Link>
  );
}
