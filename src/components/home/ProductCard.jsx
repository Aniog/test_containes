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
      {/* Image container */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-brand-ivory aspect-[3/4]">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] [bestsellers-subtitle] [bestsellers-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-400 ${hovered ? 'scale-105' : 'scale-100'}`}
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
            className="w-full bg-brand-charcoal/90 text-white py-2.5 text-xs tracking-wider uppercase font-sans font-medium hover:bg-brand-charcoal transition-colors backdrop-blur-sm"
          >
            Add to Cart
          </button>
        </div>
      </Link>

      {/* Product info */}
      <div className="mt-3">
        <h3 id={product.titleId} className="font-serif text-xs uppercase tracking-product text-brand-charcoal">
          {product.name}
        </h3>
        <p id={product.descId} className="text-sm text-brand-muted mt-1 font-sans">
          ${product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
