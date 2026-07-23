import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group relative flex flex-col">
      {/* Image container */}
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-linen aspect-[3/4]">
        {/* Primary image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Hover image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate view`}
          data-strk-img-id={product.img2Id}
          data-strk-img={`[${product.titleId}] gold jewelry worn model close up`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-espresso text-ivory font-inter text-[10px] tracking-widest uppercase px-2.5 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick add overlay */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-espresso/90 backdrop-blur-sm">
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="w-full flex items-center justify-center gap-2 py-3 text-ivory font-inter text-xs tracking-widest uppercase hover:bg-espresso transition-colors"
          >
            <ShoppingBag size={14} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="pt-4 pb-2 flex flex-col gap-1">
        <div className="flex items-center gap-1 mb-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={10}
              className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-warm-gray-light fill-warm-gray-light'}
            />
          ))}
          <span className="font-inter text-[10px] text-warm-gray ml-1">({product.reviewCount})</span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3
            id={product.titleId}
            className="font-cormorant text-base uppercase tracking-widest text-espresso hover:text-gold transition-colors leading-tight"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="sr-only">{product.shortDescription}</p>
        <p className="font-inter text-sm text-espresso font-medium">${product.price}</p>
      </div>
    </div>
  );
}
