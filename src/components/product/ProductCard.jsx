import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block no-underline">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-brand-ivory rounded-sm overflow-hidden mb-3">
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Quick add overlay */}
          <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product);
              }}
              className="w-full bg-brand-charcoal/90 text-brand-cream py-2.5 text-[10px] tracking-widest uppercase font-sans font-medium hover:bg-brand-charcoal transition-colors duration-200 border-none rounded-sm backdrop-blur-sm"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product info */}
        <div>
          <h3
            id={product.titleId}
            className="text-[10px] md:text-xs tracking-widest-plus uppercase font-sans font-medium text-brand-charcoal leading-tight"
          >
            {product.name}
          </h3>
          <p id={product.descId} className="sr-only">{product.description}</p>
          <div className="flex items-center gap-1 mt-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-brand-gold' : 'text-brand-gold-muted/40'}`}
                fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
              />
            ))}
            <span className="text-[10px] text-brand-taupe ml-1 font-sans">({product.reviewCount})</span>
          </div>
          <p className="text-sm font-sans font-medium text-brand-charcoal mt-1.5">
            ${product.price}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
