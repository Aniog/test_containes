import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/data/CartContext';

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
        <div className="relative aspect-[3/4] bg-muted-light overflow-hidden mb-3">
          <img
            data-strk-img-id={hovered ? product.imgId2 : product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Quick add overlay */}
          <div
            className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
              hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product);
              }}
              className="w-full bg-charcoal/90 text-white py-2.5 text-xs font-sans font-medium tracking-widest uppercase hover:bg-accent transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product info */}
        <div>
          <h3
            id={product.titleId}
            className="font-sans text-xs font-medium tracking-product uppercase text-charcoal"
          >
            {product.name}
          </h3>
          <p id={product.descId} className="sr-only">{product.description}</p>
          <p className="mt-1 text-sm font-sans text-muted">${product.price}</p>
        </div>
      </Link>
    </div>
  );
}
