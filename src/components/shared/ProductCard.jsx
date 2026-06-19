import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link
        to={`/product/${product.id}`}
        className="relative block overflow-hidden bg-[#F2EDE6] aspect-square"
      >
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          data-strk-img-id={product.images[0]?.id || `card-${product.id}`}
          data-strk-img={`[product-title-${product.id}] [product-desc-${product.id}]`}
          data-strk-img-ratio="1x1"
          data-strk-img-width="600"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {/* Hover second image */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate`}
            data-strk-img-id={product.hoverImage?.id || `card-hover-${product.id}`}
            data-strk-img={`[product-title-${product.id}]`}
            data-strk-img-ratio="1x1"
            data-strk-img-width="600"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Quick add */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            addItem(product, 1, product.tone);
          }}
          className={`absolute bottom-4 left-4 right-4 py-3 text-center text-xs font-medium uppercase tracking-widest bg-white/90 text-charcoal border border-charcoal/10 transition-all duration-300 hover:bg-charcoal hover:text-ivory ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          Add to Cart
        </button>
      </Link>

      <div className="mt-4 text-center">
        <h3
          id={`product-title-${product.id}`}
          className="product-name text-sm md:text-base font-medium text-charcoal"
        >
          {product.name}
        </h3>
        <p
          id={`product-desc-${product.id}`}
          className="mt-1 text-sm font-sans text-taupe"
        >
          ${product.price}
        </p>
      </div>
    </div>
  );
}
