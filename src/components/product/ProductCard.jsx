import { Link } from 'react-router-dom';
import { useCart } from '@/lib/CartContext';

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
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Hover second image */}
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

        {/* Info */}
        <h3
          id={product.titleId}
          className="font-serif text-xs font-medium uppercase tracking-product text-charcoal"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">{product.description}</p>
        <p className="mt-1 text-sm font-sans text-muted">${product.price}</p>
      </Link>

      {/* Quick add button on hover */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          addItem(product);
        }}
        className="absolute bottom-[72px] left-0 right-0 mx-2 bg-cream/95 backdrop-blur-sm border border-border-warm text-charcoal text-[10px] font-sans font-medium uppercase tracking-widest py-2.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-gold hover:text-cream hover:border-gold"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
