import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, sectionTitleId }) {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block no-underline">
        <div className="relative overflow-hidden bg-taupe/30 aspect-[3/4] rounded-sm">
          <img
            alt={product.name}
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}] [${sectionTitleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Hover second image */}
          <img
            alt={`${product.name} alternate view`}
            data-strk-img-id={product.imgId2}
            data-strk-img={`[${product.titleId}] [${sectionTitleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        </div>
        <div className="mt-3">
          <h3
            id={product.titleId}
            className="text-xs uppercase tracking-widest font-sans font-medium text-charcoal"
          >
            {product.name}
          </h3>
          <p className="text-sm text-stone mt-1 font-light">${product.price}</p>
          <p id={product.descId} className="sr-only">{product.description}</p>
        </div>
      </Link>
      {/* Quick add button on hover */}
      <button
        onClick={(e) => {
          e.preventDefault();
          addItem(product);
        }}
        className="absolute bottom-[72px] left-2 right-2 bg-cream/95 text-charcoal py-2.5 text-xs uppercase tracking-widest font-sans font-medium border border-taupe opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gold hover:text-cream hover:border-gold rounded-sm"
      >
        Add to Cart
      </button>
    </div>
  );
}
