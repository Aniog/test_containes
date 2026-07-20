import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block no-underline">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-ivory overflow-hidden mb-3">
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
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

        {/* Info */}
        <h3 id={product.titleId} className="font-sans text-[11px] md:text-xs uppercase tracking-product text-charcoal">
          {product.name}
        </h3>
        <p className="text-sm font-sans text-muted mt-1">${product.price}</p>
        <p id={product.descId} className="sr-only">{product.description}</p>
      </Link>

      {/* Quick add */}
      <button
        onClick={(e) => {
          e.preventDefault();
          addItem(product);
        }}
        className="absolute bottom-[72px] left-0 right-0 mx-2 py-2 bg-charcoal/90 text-white text-xs font-sans uppercase tracking-wider border-none opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 backdrop-blur-sm"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
