import { Link } from 'react-router-dom';
import { formatPrice } from '@/lib/utils';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-muted-bg overflow-hidden mb-4">
          <img
            alt={product.name}
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            className="w-full h-full object-cover"
          />

          {/* Quick add overlay */}
          <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product);
              }}
              className="w-full py-2.5 text-xs uppercase tracking-wider font-medium hover:opacity-90 transition-opacity backdrop-blur-sm"
              style={{ backgroundColor: 'rgba(26,26,26,0.9)', color: '#FAF7F2' }}
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product info */}
        <div className="space-y-1">
          <h3
            id={product.titleId}
            className="font-serif text-sm uppercase tracking-product text-charcoal"
          >
            {product.name}
          </h3>
          <p className="text-sm text-muted font-medium">{formatPrice(product.price)}</p>
        </div>
      </Link>
      <p id={product.descId} className="hidden">{product.description}</p>
    </div>
  );
}
