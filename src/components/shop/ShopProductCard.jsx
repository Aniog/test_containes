import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={10}
          style={{
            color: s <= Math.round(rating) ? '#C9A96E' : '#D4C9B8',
            fill: s <= Math.round(rating) ? '#C9A96E' : 'none',
          }}
        />
      ))}
    </div>
  );
}

export default function ShopProductCard({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (evt) => {
    evt.preventDefault();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="relative overflow-hidden bg-velmora-cream aspect-[3/4]">
        <div
          data-strk-bg-id={product.imgId}
          data-strk-bg={`[${product.descId}] [${product.titleId}]`}
          data-strk-bg-ratio="3x4"
          data-strk-bg-width="600"
          role="img"
          aria-label={product.name}
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={handleAdd}
            className="w-full bg-velmora-obsidian/90 backdrop-blur-sm text-velmora-linen text-[10px] font-semibold tracking-widest uppercase py-3.5 flex items-center justify-center gap-2 hover:bg-velmora-gold hover:text-velmora-obsidian transition-colors duration-300"
          >
            <ShoppingBag size={12} strokeWidth={2} />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>
      </div>
      <div className="mt-3 px-0.5">
        <div className="flex items-center justify-between">
          <p
            id={product.titleId}
            className="text-[11px] font-medium tracking-widest uppercase text-velmora-obsidian group-hover:text-velmora-gold-dark transition-colors duration-300"
          >
            {product.name}
          </p>
          <span className="text-sm font-medium text-velmora-obsidian">${product.price}</span>
        </div>
        <p id={product.descId} className="text-xs text-velmora-ash mt-0.5">{product.shortDescription}</p>
        <div className="flex items-center gap-1.5 mt-1.5">
          <StarRating rating={product.rating} />
          <span className="text-[10px] text-velmora-ash">({product.reviewCount})</span>
        </div>
      </div>
    </Link>
  );
}
