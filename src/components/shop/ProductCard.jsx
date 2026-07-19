import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-gold-light overflow-hidden mb-3">
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
        <h3 id={product.titleId} className="font-serif text-xs md:text-sm uppercase tracking-[0.12em] text-charcoal">
          {product.name}
        </h3>
        <p id={product.descId} className="text-xs text-muted mt-1 hidden">{product.shortDesc}</p>
        <p className="text-sm text-charcoal font-medium mt-1">${product.price}</p>
      </Link>

      {/* Quick add */}
      <button
        onClick={(e) => {
          e.preventDefault();
          addItem(product);
        }}
        className="absolute bottom-[72px] left-0 right-0 bg-charcoal/90 text-white text-xs uppercase tracking-[0.1em] py-2.5 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gold"
      >
        Add to Cart
      </button>
    </div>
  );
}
