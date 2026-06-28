import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const { addItem } = useCart();

  return (
    <div className="group flex flex-col">
      <Link
        to={`/product/${product.id}`}
        className="relative block aspect-[4/5] overflow-hidden bg-velmora-soft"
      >
        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={product.imgQueryPrimary}
          data-strk-img-ratio="4x3"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0"
        />
        {/* Secondary image (revealed on hover) */}
        <img
          alt={`${product.name} alternate view`}
          data-strk-img-id={product.imgIdAlt}
          data-strk-img={product.imgQuerySecondary}
          data-strk-img-ratio="4x3"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        />
        {/* Quick add */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            addItem(product, product.variants[0], 1);
          }}
          className="absolute left-4 right-4 bottom-4 bg-velmora-cream/95 backdrop-blur text-velmora-ink text-[11px] uppercase tracking-[0.25em] py-3 flex items-center justify-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-velmora-ink hover:text-velmora-cream"
          aria-label={`Add ${product.name} to cart`}
        >
          <Plus className="w-3 h-3" /> Add to Cart
        </button>
      </Link>
      <div className="pt-5 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-sans uppercase text-[12px] md:text-[13px] tracking-[0.22em] text-velmora-ink leading-snug">
              {product.name}
            </h3>
          </Link>
          <p className="mt-2 text-xs text-velmora-muted">{product.tagline}</p>
        </div>
        <p className="text-sm text-velmora-ink whitespace-nowrap">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
