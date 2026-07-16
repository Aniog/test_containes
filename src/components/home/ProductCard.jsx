import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem, openCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultVariant = product.variants[0]?.value || 'gold';
    addItem(product, defaultVariant);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-sand overflow-hidden mb-4 rounded-sm">
        {/* Primary image */}
        <img
          data-strk-img-id={`card-${product.imgId}-1`}
          data-strk-img={`[card-name-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.shortName}
          className={`w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />

        {/* Secondary hover image */}
        <img
          data-strk-img-id={`card-${product.imgId}-2`}
          data-strk-img={`[card-name-${product.id}] jewelry detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.shortName}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {/* Quick add button on hover */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-3 left-3 right-3 py-2.5 bg-cream/95 text-soft-black text-xs tracking-[0.12em] uppercase font-medium rounded-sm transition-all duration-300 flex items-center justify-center gap-2 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          {added ? 'Added!' : 'Quick Add'}
        </button>
      </div>

      {/* Info */}
      <div className="px-0.5">
        <span
          id={`card-name-${product.id}`}
          className="hidden"
        >
          {product.shortName}
        </span>
        <h3 className="font-serif text-xs md:text-sm tracking-[0.15em] uppercase text-soft-black mb-1">
          {product.name}
        </h3>
        <div className="flex items-center gap-1.5 mb-1.5">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-2.5 h-2.5 ${
                  i < Math.floor(product.rating)
                    ? 'fill-gold text-gold'
                    : 'fill-none text-gold-light/30'
                }`}
              />
            ))}
          </div>
          <span className="text-[10px] text-taupe">({product.reviewCount})</span>
        </div>
        <p className="text-sm text-gold-dark font-medium">${product.price}</p>
      </div>
    </Link>
  );
}
