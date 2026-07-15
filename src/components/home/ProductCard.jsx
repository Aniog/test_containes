import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-linen overflow-hidden mb-3">
          <img
            alt={product.name}
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}] [bestsellers-subtitle] [bestsellers-title]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Quick add button on hover */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product);
            }}
            className="absolute bottom-3 left-3 right-3 bg-cream/95 backdrop-blur-sm text-charcoal py-2.5 text-xs uppercase tracking-widest font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>

        {/* Info */}
        <h3
          id={product.titleId}
          className="font-serif text-xs uppercase tracking-product text-charcoal"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">{product.description}</p>
        <p className="text-sm text-taupe mt-1">${product.price}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
