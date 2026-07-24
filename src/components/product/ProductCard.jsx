import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'gold', 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block no-underline"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-ivory mb-3">
        <img
          data-strk-img-id={hovered ? product.imgId2 : product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* Quick add overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
          <button
            onClick={handleAddToCart}
            className="w-full py-2.5 bg-cream/95 text-charcoal text-xs font-sans tracking-wide uppercase hover:bg-gold hover:text-cream transition-all duration-300 border-none cursor-pointer backdrop-blur-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="text-center">
        <h3
          id={product.titleId}
          className="font-serif text-xs md:text-sm text-charcoal uppercase tracking-product leading-tight"
        >
          {product.name}
        </h3>
        <p className="mt-1.5 text-sm font-sans text-muted">${product.price.toFixed(2)}</p>
        <p id={product.descId} className="sr-only">{product.description}</p>
      </div>
    </Link>
  );
}
