import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group flex flex-col">
      <Link to={`/product/${product.slug}`} className="relative overflow-hidden bg-ivory-dark aspect-[3/4] block">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate`}
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] [${product.descId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {product.tags?.includes('bestseller') && (
          <span className="absolute top-3 left-3 bg-gold text-obsidian font-sans text-[9px] tracking-widest uppercase px-2 py-1">
            Bestseller
          </span>
        )}
        {product.tags?.includes('new') && (
          <span className="absolute top-3 right-3 bg-obsidian text-ivory font-sans text-[9px] tracking-widest uppercase px-2 py-1">
            New
          </span>
        )}

        <div className="absolute bottom-0 left-0 right-0 bg-ivory/95 py-3 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product, product.variants[0]);
            }}
            className="w-full font-sans text-[10px] tracking-widest uppercase text-text-primary hover:text-gold transition-colors duration-300"
          >
            Quick Add to Cart
          </button>
        </div>
      </Link>

      <div className="pt-4 pb-2">
        <Link to={`/product/${product.slug}`}>
          <h3 id={product.titleId} className="font-serif text-sm uppercase tracking-widest text-text-primary hover:text-gold transition-colors duration-300 mb-1">
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="font-sans text-xs text-text-muted mb-2 hidden">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-sans text-sm text-text-secondary">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star size={10} fill="#C9A96E" className="text-gold" />
            <span className="font-sans text-[10px] text-text-muted">{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
