import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        {/* Image container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-brand-ivory mb-3">
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Hover overlay with second image */}
          <img
            data-strk-img-id={product.imgId2}
            data-strk-img={`[${product.titleId}] gold jewelry close up`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        </div>

        {/* Product info */}
        <h3 id={product.titleId} className="font-serif text-xs uppercase tracking-product text-brand-charcoal mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-brand-muted">${product.price}</p>
        <p id={product.descId} className="sr-only">{product.description}</p>
      </Link>

      {/* Quick add button - shows on hover */}
      <button
        onClick={(e) => {
          e.preventDefault();
          addItem(product);
        }}
        className="absolute bottom-[72px] left-2 right-2 bg-brand-charcoal/90 text-brand-cream py-2.5 text-xs uppercase tracking-wider font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 hover:bg-brand-charcoal"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
