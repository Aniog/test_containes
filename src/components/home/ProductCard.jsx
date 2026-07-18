import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block no-underline">
        {/* Image */}
        <div className="relative aspect-[3/4] bg-taupe/30 overflow-hidden mb-4">
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Second image on hover */}
          <img
            data-strk-img-id={product.imgId2}
            data-strk-img={`[${product.titleId}] gold jewelry close up`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        </div>

        {/* Info */}
        <div className="text-center">
          <h3
            id={product.titleId}
            className="font-sans text-xs font-medium tracking-product uppercase text-charcoal mb-1"
          >
            {product.name}
          </h3>
          <p id={product.descId} className="sr-only">{product.description}</p>
          <div className="flex items-center justify-center gap-0.5 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-taupe'}`}
              />
            ))}
          </div>
          <p className="font-sans text-sm text-charcoal font-medium">${product.price}</p>
        </div>
      </Link>

      {/* Quick Add */}
      {showQuickAdd && (
        <button
          onClick={(e) => {
            e.preventDefault();
            addItem(product);
          }}
          className="absolute bottom-[100px] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 px-5 py-2.5 bg-charcoal text-white text-xs font-sans font-medium tracking-product uppercase whitespace-nowrap border-none hover:bg-gold"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
