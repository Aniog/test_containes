import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Star } from 'lucide-react';

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
            data-strk-img-id={hovered ? product.imgId2 : product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Quick add overlay */}
          <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product);
              }}
              className="w-full bg-cream/95 text-charcoal py-2.5 font-sans text-xs uppercase tracking-wider hover:bg-cream transition-colors border-none"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product info */}
        <div className="mt-4">
          <h3
            id={product.titleId}
            className="font-sans text-xs uppercase tracking-product text-charcoal"
          >
            {product.name}
          </h3>
          <p id={product.descId} className="sr-only">{product.description}</p>
          <div className="flex items-center gap-1 mt-1.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-accent-light text-accent-light' : 'text-border'}`}
              />
            ))}
            <span className="text-xs text-muted-fg ml-1">({product.reviewCount})</span>
          </div>
          <p className="font-sans text-sm text-charcoal mt-1.5">${product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
