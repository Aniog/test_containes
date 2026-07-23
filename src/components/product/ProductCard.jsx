import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import StarIcon from '@/components/ui/StarIcon';

const ProductCard = ({ product }) => {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-brand-ivory overflow-hidden mb-3">
          <img
            alt={product.name}
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
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
              className="w-full bg-white/95 backdrop-blur-sm text-brand-charcoal py-2.5 text-xs tracking-wider uppercase font-medium hover:bg-brand-gold hover:text-white transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product info */}
        <div>
          <h3
            id={product.titleId}
            className="text-[11px] md:text-xs font-sans font-medium tracking-product uppercase text-brand-charcoal"
          >
            {product.name}
          </h3>
          <p id={product.descId} className="sr-only">{product.description}</p>
          <div className="flex items-center gap-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className="w-3 h-3"
                filled={i < Math.floor(product.rating)}
              />
            ))}
            <span className="text-[10px] text-brand-muted ml-1">({product.reviewCount})</span>
          </div>
          <p className="text-sm font-medium text-brand-charcoal mt-1">${product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
