import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem, toggleCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      color: 'gold',
      quantity: 1,
    });
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      toggleCart(true);
    }, 300);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-warm-100 overflow-hidden mb-4">
        <img
          data-strk-img-id={`card-${product.id}-1`}
          data-strk-img={`[card-name-${product.id}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100'
          }`}
        />
        <img
          data-strk-img-id={`card-${product.id}-2`}
          data-strk-img={`[card-name-${product.id}] jewelry detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {/* Quick add overlay */}
        <div
          className={`absolute inset-x-0 bottom-0 p-3 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className={`w-full py-2.5 text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
              added
                ? 'bg-gold text-white'
                : 'bg-cream/90 backdrop-blur-sm text-charcoal hover:bg-gold hover:text-white'
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              <ShoppingBag className="w-3 h-3" />
              {added ? 'Added!' : 'Add to Bag'}
            </span>
          </button>
        </div>
      </div>

      {/* Info */}
      <div>
        <h3
          id={`card-name-${product.id}`}
          className="font-serif text-sm md:text-base tracking-[0.14em] uppercase mb-1"
        >
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="font-sans text-sm text-ink-600">${product.price}</span>
          <span className="flex items-center gap-0.5 text-xs text-ink-400">
            <Star className="w-3 h-3 fill-gold text-gold" />
            {product.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}