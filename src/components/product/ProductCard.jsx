import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
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
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative overflow-hidden bg-velmora-linen aspect-[3/4] mb-4">
        {/* Primary image */}
        <img
          src={product.image}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${
            hovered ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {/* Secondary image (hover) */}
        <img
          src={product.image2}
          alt={`${product.name} alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags?.includes('bestseller') && (
            <span className="bg-velmora-obsidian text-velmora-gold font-manrope text-[9px] tracking-widest-sm uppercase px-2 py-1">
              Bestseller
            </span>
          )}
          {product.tags?.includes('new') && (
            <span className="bg-velmora-gold text-velmora-obsidian font-manrope text-[9px] tracking-widest-sm uppercase px-2 py-1">
              New
            </span>
          )}
        </div>

        {/* Quick add button */}
        <div
          className={`absolute bottom-0 left-0 right-0 transition-transform duration-300 ${
            hovered ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className={`w-full flex items-center justify-center gap-2 font-manrope text-xs tracking-widest-md uppercase py-3.5 transition-colors duration-300 ${
              added
                ? 'bg-velmora-obsidian text-velmora-gold'
                : 'bg-velmora-gold text-velmora-obsidian hover:bg-velmora-gold-light'
            }`}
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="space-y-1.5">
        <p
          id={product.titleId}
          className="font-cormorant text-base uppercase tracking-widest-sm text-velmora-obsidian group-hover:text-velmora-gold-dark transition-colors duration-300"
        >
          {product.name}
        </p>
        <p
          id={product.descId}
          className="font-manrope text-xs text-velmora-text-muted"
        >
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between pt-0.5">
          <span className="font-manrope text-sm text-velmora-obsidian font-medium">
            ${product.price}
          </span>
          <div className="flex items-center gap-1">
            <Star size={10} fill="#C9A96E" stroke="none" />
            <span className="font-manrope text-[10px] text-velmora-text-muted">
              {product.rating} ({product.reviewCount})
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
