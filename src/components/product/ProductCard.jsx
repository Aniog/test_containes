import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

const TRANSPARENT_PX = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block no-underline">
        {/* Image Container */}
        <div className="relative aspect-[3/4] bg-muted overflow-hidden mb-4">
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src={TRANSPARENT_PX}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Second image on hover */}
          <img
            data-strk-img-id={product.imgId2}
            data-strk-img={`[${product.titleId}] gold jewelry close up`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src={TRANSPARENT_PX}
            alt={`${product.name} alternate view`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        </div>

        {/* Info */}
        <div className="text-center">
          <h3
            id={product.titleId}
            className="text-xs font-sans font-medium uppercase tracking-product text-charcoal"
          >
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-charcoal font-medium">${product.price}</p>
          <p id={product.descId} className="sr-only">{product.description}</p>
        </div>
      </Link>

      {/* Quick Add */}
      {showQuickAdd && (
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addItem(product);
          }}
          className="absolute bottom-[72px] left-1/2 -translate-x-1/2 bg-charcoal text-white text-xs font-medium uppercase tracking-widest px-6 py-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 whitespace-nowrap border-none cursor-pointer hover:bg-gold"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
