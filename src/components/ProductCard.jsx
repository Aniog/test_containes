import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/data/products';
import Image from './Image';

export default function ProductCard({ product, queryContext = '' }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const query = `[product-desc-${product.id}] [product-name-${product.id}] ${queryContext}`;
  const hoverQuery = `[product-hover-${product.id}] [product-name-${product.id}]`;

  return (
    <article
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="sr-only">
        <span id={`product-name-${product.id}`}>{product.name}</span>
        <span id={`product-desc-${product.id}`}>{product.description}</span>
        <span id={`product-hover-${product.id}`}>{product.name} worn on model</span>
      </div>

      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-warmgray">
        <div className="aspect-[3/4] relative">
          <Image
            id={`product-img-${product.id}`}
            query={query}
            ratio="3x4"
            width={600}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {hovered && (
            <div className="absolute inset-0">
              <Image
                id={`product-hover-${product.id}`}
                query={hoverQuery}
                ratio="3x4"
                width={600}
                alt={product.name}
                className="w-full h-full object-cover animate-fadeIn"
              />
            </div>
          )}
          {product.badge && (
            <span className="absolute top-3 left-3 bg-cream/90 text-ink text-[10px] uppercase tracking-[0.16em] px-2.5 py-1 font-medium">
              {product.badge}
            </span>
          )}
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addItem(product, 1, product.tone[0]);
          }}
          className="absolute bottom-3 left-3 right-3 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-cream text-ink py-3 text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2 hover:bg-gold-600 hover:text-white focus:translate-y-0 focus:opacity-100"
        >
          <ShoppingBag className="w-4 h-4" strokeWidth={1.6} />
          Quick Add
        </button>
      </Link>

      <div className="mt-4 text-center">
        <div className="flex items-center justify-center gap-1 mb-1.5">
          <Star className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
          <span className="text-xs text-clay">
            {product.rating} ({product.reviews})
          </span>
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-base md:text-lg uppercase tracking-[0.12em] hover:text-gold-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm font-medium text-clay">{formatPrice(product.price)}</p>
      </div>
    </article>
  );
}
