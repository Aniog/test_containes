import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-[3/4] bg-linen overflow-hidden mb-4">
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Second image on hover */}
          <img
            data-strk-img-id={product.imgId2}
            data-strk-img={`[${product.titleId}] gold jewelry close up`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        </div>

        {/* Product Info */}
        <h3 id={product.titleId} className="font-serif text-sm uppercase tracking-product text-charcoal mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-taupe">${product.price}</p>
        <p id={product.descId} className="sr-only">{product.description}</p>
      </Link>

      {/* Quick Add */}
      {showQuickAdd && (
        <button
          onClick={(e) => {
            e.preventDefault();
            addItem(product);
          }}
          className="absolute bottom-[72px] left-0 right-0 bg-charcoal/90 text-cream text-xs uppercase tracking-cta py-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
