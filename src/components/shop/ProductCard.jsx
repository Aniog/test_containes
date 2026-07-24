import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] bg-velmora-sand overflow-hidden mb-4">
          <img
            data-strk-img-id={`shop-card-${product.id}-primary`}
            data-strk-img={`[shop-card-${product.id}-name] gold jewelry editorial warm`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-500 ${
              hovered ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <img
            data-strk-img-id={`shop-card-${product.id}-secondary`}
            data-strk-img={`[shop-card-${product.id}-name] gold jewelry detail warm`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              hovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
          />
        </div>
      </Link>

      <div className="relative">
        <h3
          id={`shop-card-${product.id}-name`}
          className="font-serif text-xs lg:text-sm tracking-[0.15em] uppercase text-velmora-ink text-center"
        >
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-1 mt-1.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
          ))}
          <span className="text-[10px] text-velmora-stone ml-1">({product.reviews})</span>
        </div>
        <p className="text-sm font-sans font-medium text-velmora-ink text-center mt-1.5">
          ${product.price}
        </p>
        <button
          onClick={() => addItem(product, product.colorVariants[0])}
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 btn-primary text-xs py-2 px-4 gap-1.5 whitespace-nowrap`}
        >
          <ShoppingBag className="w-3 h-3" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}