import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={10}
          fill={s <= Math.round(rating) ? '#C9A96E' : 'none'}
          className={s <= Math.round(rating) ? 'text-velmora-gold' : 'text-velmora-mist'}
          strokeWidth={1}
        />
      ))}
    </div>
  );
}

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="product-card group flex flex-col">
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-velmora-linen aspect-[3/4]">
        <img
          className="product-img-primary absolute inset-0 w-full h-full object-cover"
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
        />
        <img
          className="product-img-secondary absolute inset-0 w-full h-full object-cover"
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
        />
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out-expo">
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="w-full py-3 bg-velmora-obsidian/90 text-velmora-cream text-[10px] uppercase tracking-widest font-medium flex items-center justify-center gap-2 hover:bg-velmora-obsidian transition-colors"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </Link>
      <div className="pt-4 flex flex-col gap-1.5">
        <span className="text-[10px] uppercase tracking-widest text-velmora-dust font-medium">
          {product.category}
        </span>
        <Link to={`/product/${product.slug}`}>
          <h3
            id={product.titleId}
            className="text-sm uppercase tracking-[0.12em] font-medium text-velmora-obsidian hover:text-velmora-gold transition-colors leading-tight"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="sr-only">{product.shortDescription}</p>
        <div className="flex items-center justify-between mt-1">
          <span className="text-sm font-medium text-velmora-obsidian">${product.price}</span>
          <StarRating rating={product.rating} />
        </div>
      </div>
    </div>
  );
}
