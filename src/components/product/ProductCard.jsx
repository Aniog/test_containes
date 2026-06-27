import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product, imgId, imgQuery, img2Id, img2Query }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-velmora-linen aspect-[3/4]">
          {/* Primary Image */}
          <img
            data-strk-img-id={imgId}
            data-strk-img={imgQuery}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
          />
          {/* Secondary Image */}
          <img
            data-strk-img-id={img2Id}
            data-strk-img={img2Query}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
          />

          {/* Badge */}
          {product.badge && (
            <div className="absolute top-3 left-3 z-10">
              <span className="font-sans text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 bg-velmora-obsidian text-velmora-gold">
                {product.badge}
              </span>
            </div>
          )}

          {/* Quick Add Button */}
          <div className={`absolute bottom-0 left-0 right-0 z-10 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            <button
              onClick={handleAddToCart}
              className="w-full py-3.5 bg-velmora-obsidian/90 backdrop-blur-sm text-velmora-cream font-sans text-xs uppercase tracking-widest font-semibold hover:bg-velmora-obsidian transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              {added ? 'Added!' : 'Quick Add'}
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="pt-4 pb-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-serif text-base uppercase tracking-wider text-velmora-text-dark leading-tight group-hover:text-velmora-gold-muted transition-colors">
              {product.name}
            </h3>
            <span className="font-sans text-sm font-medium text-velmora-text-dark flex-shrink-0">
              ${product.price}
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-1.5">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-2.5 h-2.5 ${i < Math.round(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-sand'}`}
                />
              ))}
            </div>
            <span className="font-sans text-[11px] text-velmora-text-muted">({product.reviewCount})</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
