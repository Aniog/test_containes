import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-cream aspect-[3/4]">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:opacity-0 group-hover:scale-105"
        />
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 scale-105 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
        />

        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags?.includes('bestseller') && (
            <span className="bg-espresso text-ivory text-[9px] uppercase tracking-widest px-2 py-1 font-sans">Bestseller</span>
          )}
          {product.tags?.includes('new') && (
            <span className="bg-gold text-espresso text-[9px] uppercase tracking-widest px-2 py-1 font-sans">New</span>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={(e) => { e.preventDefault(); addItem(product); }}
            className="w-full bg-espresso text-ivory py-3 text-[10px] uppercase tracking-widest font-sans flex items-center justify-center gap-2 hover:bg-mink transition-colors duration-300"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </Link>

      <div className="pt-3 pb-1">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <Link to={`/product/${product.slug}`}>
              <h3
                id={product.titleId}
                className="font-serif text-xs uppercase tracking-product text-espresso leading-snug hover:text-gold transition-colors duration-300 truncate"
              >
                {product.name}
              </h3>
            </Link>
            <p id={product.descId} className="sr-only">{product.shortDescription}</p>
            <div className="flex items-center gap-1 mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={9} className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-stone/30'} strokeWidth={0} fill="currentColor" />
              ))}
              <span className="text-[9px] text-stone font-sans ml-0.5">({product.reviewCount})</span>
            </div>
          </div>
          <span className="font-sans text-sm font-medium text-espresso flex-shrink-0">${product.price}</span>
        </div>
      </div>
    </div>
  );
}
