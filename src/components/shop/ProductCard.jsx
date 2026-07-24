import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, imgRef }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 'Gold', 1);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative overflow-hidden bg-velmora-linen aspect-[3/4]">
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10 bg-velmora-obsidian px-2.5 py-1">
            <span className="font-inter text-[10px] uppercase tracking-widest text-velmora-gold">
              {product.badge}
            </span>
          </div>
        )}

        {/* Primary image */}
        <img
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
        />

        {/* Hover image */}
        <img
          alt={`${product.name} alternate view`}
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry worn close up`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        />

        {/* Quick add overlay */}
        <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <button
            onClick={handleAddToCart}
            className="w-full bg-velmora-obsidian/90 backdrop-blur-sm text-velmora-cream font-inter text-[11px] uppercase tracking-widest py-3 flex items-center justify-center gap-2 hover:bg-velmora-obsidian transition-colors duration-200"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="pt-4 pb-2">
        <p
          id={product.titleId}
          className="font-cormorant text-sm uppercase tracking-[0.12em] text-velmora-text-dark font-medium leading-tight group-hover:text-velmora-gold-dark transition-colors duration-200"
        >
          {product.name}
        </p>
        <p
          id={product.descId}
          className="font-inter text-xs text-velmora-text-muted mt-1"
        >
          {product.shortDesc}
        </p>
        <div className="flex items-center justify-between mt-2">
          <span className="font-inter text-sm font-medium text-velmora-text-dark">
            ${product.price}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3" style={{ fill: '#C9A96E', color: '#C9A96E' }} />
            <span className="font-inter text-xs text-velmora-text-muted">{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
