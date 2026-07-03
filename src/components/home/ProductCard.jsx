import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem, toggleCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addItem(product, 'gold', 1);
    toggleCart();
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-alt rounded-sm">
        <img
          src={hovered ? product.secondaryImage : product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-velmora group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <button
            onClick={handleAddToCart}
            className="w-full rounded-full bg-base/90 backdrop-blur text-white py-2.5 text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-base transition-colors"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-serif text-base tracking-wide text-ink">{product.name}</h3>
        <p className="mt-1 text-sm text-ink/70">${product.price}</p>
        <div className="mt-2 flex items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-gold text-gold" />
          <span className="text-xs text-ink/70">{product.rating} ({product.reviewCount})</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
