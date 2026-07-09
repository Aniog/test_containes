import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block no-underline">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-muted overflow-hidden rounded-sm">
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          <img
            data-strk-img-id={product.imgId2}
            data-strk-img={`[${product.titleId}] gold jewelry close up`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        </div>

        {/* Product info */}
        <div className="mt-4">
          <h3
            id={product.titleId}
            className="font-sans text-xs font-medium uppercase tracking-product text-charcoal"
          >
            {product.name}
          </h3>
          <p id={product.descId} className="sr-only">{product.description}</p>
          <div className="flex items-center gap-1 mt-1.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-border'}`}
              />
            ))}
            <span className="text-xs text-muted-fg ml-1 font-sans">({product.reviewCount})</span>
          </div>
          <p className="mt-1.5 text-sm font-sans font-medium text-charcoal">${product.price}</p>
        </div>
      </Link>

      {/* Quick add button */}
      {showQuickAdd && (
        <button
          onClick={(e) => {
            e.preventDefault();
            addItem(product);
          }}
          className="absolute bottom-[120px] left-3 right-3 bg-white/95 backdrop-blur-sm text-charcoal py-2.5 text-xs font-sans font-medium tracking-widest uppercase opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 border border-border hover:border-gold hover:text-gold rounded-sm"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
