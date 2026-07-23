import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block no-underline">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-muted overflow-hidden">
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
            data-strk-img={`[${product.titleId}] gold jewelry close up`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </Link>

      {/* Quick add button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          addItem(product);
        }}
        className={`absolute bottom-[calc(25%+8px)] left-2 right-2 bg-cream/95 text-charcoal text-[10px] uppercase tracking-[0.15em] py-2 border-none font-sans font-medium transition-all duration-300 hover:bg-gold hover:text-cream ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
      >
        Add to Cart
      </button>

      {/* Product info */}
      <div className="mt-3">
        <h3
          id={product.titleId}
          className="text-[11px] md:text-xs uppercase tracking-[0.12em] text-charcoal font-sans font-medium"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">{product.description}</p>
        <p className="mt-1 text-sm text-warm-gray font-sans">
          ${product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
