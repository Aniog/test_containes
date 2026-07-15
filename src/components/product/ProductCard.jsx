import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block no-underline">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-cream overflow-hidden mb-3">
          <img
            alt={product.name}
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Hover overlay with Add to Cart */}
          <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product);
              }}
              className="bg-white text-charcoal px-4 py-2 text-[10px] uppercase tracking-widest font-sans font-medium hover:bg-gold hover:text-white transition-colors border-none cursor-pointer transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Product info */}
        <div className="text-center">
          <h3
            id={product.titleId}
            className="text-[11px] uppercase tracking-widest text-charcoal font-sans font-medium"
          >
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-stone font-sans">${product.price}</p>
          <p id={product.descId} className="sr-only">{product.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
