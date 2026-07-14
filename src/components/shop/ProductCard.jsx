import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product, containerRef }) {
  const { addItem } = useCart();

  return (
    <div className="group flex flex-col">
      {/* Image container */}
      <div className="relative overflow-hidden bg-velmora-cream aspect-[3/4]">
        {/* Primary image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:opacity-0 group-hover:scale-105"
        />
        {/* Hover image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate view`}
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry worn on model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className="absolute inset-0 w-full h-full object-cover opacity-0 scale-105 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags?.includes('bestseller') && (
            <span className="font-sans text-[9px] tracking-widest uppercase bg-velmora-gold text-velmora-obsidian px-2 py-1 font-semibold">
              Bestseller
            </span>
          )}
          {product.tags?.includes('new') && (
            <span className="font-sans text-[9px] tracking-widest uppercase bg-velmora-obsidian text-velmora-pale px-2 py-1">
              New
            </span>
          )}
        </div>

        {/* Quick add */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={() => addItem(product, 'Gold Tone', 1)}
            className="w-full bg-velmora-obsidian/90 backdrop-blur-sm text-velmora-pale font-sans text-xs tracking-widest uppercase py-3.5 hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="pt-4 pb-2">
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              width="10"
              height="10"
              viewBox="0 0 24 24"
              className={i < Math.floor(product.rating) ? 'text-velmora-gold' : 'text-velmora-mist/40'}
              fill="currentColor"
            >
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
            </svg>
          ))}
          <span className="font-sans text-[10px] text-velmora-warm-gray ml-1">({product.reviewCount})</span>
        </div>

        <Link to={`/product/${product.slug}`}>
          <h3
            id={product.titleId}
            className="font-serif text-sm uppercase tracking-widest text-velmora-ink hover:text-velmora-gold transition-colors duration-300 leading-tight"
          >
            {product.name}
          </h3>
        </Link>

        <p id={product.descId} className="font-sans text-xs text-velmora-warm-gray mt-1 leading-relaxed line-clamp-1">
          {product.shortDescription}
        </p>

        <p className="font-serif text-base text-velmora-ink mt-2">
          ${product.price}
        </p>
      </div>
    </div>
  );
}
