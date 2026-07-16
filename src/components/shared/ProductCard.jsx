import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-warm/20 overflow-hidden mb-4">
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
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        </div>

        {/* Product info */}
        <div className="text-center">
          <h3
            id={product.titleId}
            className="font-sans text-xs font-medium uppercase tracking-widest text-charcoal mb-1"
          >
            {product.name}
          </h3>
          <p className="font-serif text-lg text-charcoal">${product.price}</p>
          <p id={product.descId} className="sr-only">{product.description}</p>
        </div>
      </Link>

      {/* Quick Add */}
      {showQuickAdd && (
        <button
          onClick={(e) => {
            e.preventDefault();
            addItem(product);
          }}
          className="absolute bottom-[4.5rem] left-1/2 -translate-x-1/2 bg-charcoal text-white px-6 py-2.5 text-xs tracking-wider uppercase font-sans font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 hover:bg-gold whitespace-nowrap"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
