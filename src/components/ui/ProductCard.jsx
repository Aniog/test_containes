import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import ProductImage from './ProductImage';

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
      <div className="relative overflow-hidden bg-ivory aspect-product">
        {/* Primary image */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}>
          <ProductImage
            shape={product.imgShape}
            gold={product.imgColor}
            accent={product.imgAccent}
            className="w-full h-full"
            alt={product.name}
          />
        </div>

        {/* Hover image (alternate angle) */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
          <ProductImage
            shape={product.imgShape}
            gold={product.imgAccent}
            accent={product.imgColor}
            bg="warm"
            className="w-full h-full"
            alt={`${product.name} alternate view`}
          />
        </div>

        {/* Quick add button */}
        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <button
            onClick={handleAddToCart}
            className={`w-full py-3 font-sans text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-colors duration-300 ${
              added
                ? 'bg-obsidian text-gold'
                : 'bg-obsidian/90 text-warm-white hover:bg-gold hover:text-obsidian'
            }`}
          >
            <ShoppingBag size={12} />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>

        {/* Bestseller tag */}
        {product.tags?.includes('bestseller') && (
          <div className="absolute top-3 left-3">
            <span className="font-sans text-[9px] tracking-widest uppercase bg-gold text-obsidian px-2 py-1">
              Bestseller
            </span>
          </div>
        )}
      </div>

      {/* Product info */}
      <div className="pt-3 pb-1">
        <h3 className="font-serif text-sm uppercase tracking-widest text-obsidian leading-tight group-hover:text-gold-dark transition-colors duration-300">
          {product.name}
        </h3>
        <div className="flex items-center justify-between mt-1.5">
          <span className="font-sans text-sm text-obsidian font-medium">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star size={10} className="text-gold fill-gold" />
            <span className="font-sans text-xs text-stone">{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
