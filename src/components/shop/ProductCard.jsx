import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`}>
        <div className="relative aspect-[3/4] bg-parchment overflow-hidden mb-4">
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
          />
          <img
            data-strk-img-id={product.imgId2}
            data-strk-img={`[${product.titleId}] gold jewelry close up detail`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} detail`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
          />

          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.tags.includes('bestseller') && (
              <span className="bg-champagne text-obsidian font-sans text-[9px] uppercase tracking-widest font-semibold px-2 py-0.5">
                Bestseller
              </span>
            )}
            {product.tags.includes('new') && (
              <span className="bg-obsidian text-ivory font-sans text-[9px] uppercase tracking-widest font-semibold px-2 py-0.5">
                New
              </span>
            )}
          </div>

          <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            <button
              onClick={(e) => { e.preventDefault(); addItem(product); }}
              className="w-full bg-obsidian/90 text-ivory font-sans text-[10px] uppercase tracking-widest font-semibold py-3 flex items-center justify-center gap-2 hover:bg-obsidian transition-colors"
            >
              <ShoppingBag size={12} />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      <div>
        <p id={product.descId} className="hidden">{product.shortDescription}</p>
        <Link to={`/product/${product.slug}`}>
          <h3 id={product.titleId} className="font-serif text-sm uppercase tracking-wider text-charcoal hover:text-champagne-dark transition-colors leading-tight mb-1">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-1 mb-1.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={10} className={i < Math.floor(product.rating) ? 'text-champagne fill-champagne' : 'text-mist'} />
          ))}
          <span className="font-sans text-[10px] text-stone ml-1">({product.reviewCount})</span>
        </div>
        <p className="font-serif text-base text-charcoal">${product.price}</p>
      </div>
    </div>
  );
}
