import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant: 'gold',
    });
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block no-underline"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-cream overflow-hidden mb-3">
        {/* Placeholder with product name */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <img
            data-strk-img-id={`product-card-${product.id}-img-${product.slug}`}
            data-strk-img={`[product-card-${product.id}-name] gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 text-[10px] font-medium uppercase tracking-widest text-stone-700">
            {product.badge}
          </span>
        )}

        {/* Quick add overlay */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full py-2.5 bg-white/95 backdrop-blur-sm text-stone-900 text-xs font-medium uppercase tracking-widest hover:bg-gold hover:text-white transition-colors border-none"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-1">
        <h3
          id={`product-card-${product.id}-name`}
          className="font-serif text-xs md:text-sm font-medium text-stone-900 uppercase tracking-product"
        >
          {product.name}
        </h3>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-stone-300'}`}
            />
          ))}
          <span className="text-[10px] text-stone-400 ml-1">({product.reviews})</span>
        </div>
        <p className="text-sm font-medium text-stone-900">${product.price}</p>
      </div>
    </Link>
  );
}
