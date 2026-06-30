import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product, showQuickAdd = true }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const data = product.data || product;
  const image = hovered && data.hover_image_url
    ? data.hover_image_url
    : data.image_url;

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, data.variants?.[0] || 'Gold', 1);
  };

  return (
    <Link
      to={`/product/${data.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-velmora-sand overflow-hidden mb-4">
        <img
          src={image}
          alt={data.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {data.new && (
          <span className="absolute top-3 left-3 bg-white/90 text-velmora-base text-[10px] uppercase tracking-widest px-2.5 py-1">
            New
          </span>
        )}
        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            className="absolute bottom-0 left-0 right-0 bg-velmora-base/90 text-white py-3 text-xs uppercase tracking-widest font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Quick Add
          </button>
        )}
      </div>

      {/* Info */}
      <div className="text-center">
        <h3 className="font-serif text-sm md:text-base uppercase tracking-widest">
          {data.name}
        </h3>
        <div className="flex items-center justify-center gap-2 mt-1.5">
          {data.rating && (
            <div className="flex items-center gap-0.5">
              <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
              <span className="text-xs text-velmora-stone">{data.rating}</span>
            </div>
          )}
          <span className="text-xs text-velmora-stone">({data.review_count || 0})</span>
        </div>
        <p className="mt-1.5 text-sm font-medium text-velmora-base">
          ${data.price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
}
