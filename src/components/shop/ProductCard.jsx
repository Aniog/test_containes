import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { getPlaceholderSvg } from '@/lib/utils';

const ProductCard = ({ product, showQuickAdd = true }) => {
  const { addToCart } = useCart();
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultVariant = product.variants.find((v) => v.available && v.id === 'gold') ||
      product.variants.find((v) => v.available);
    if (!defaultVariant) return;
    addToCart(product, defaultVariant.id);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-velmora-cream overflow-hidden mb-4">
        <Link to={`/products/${product.slug}`} className="block w-full h-full" aria-label={product.name}>
          <img
            data-strk-img-id={`product-${product.id}-main`}
            data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry editorial warm`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src={getPlaceholderSvg(product.id, product.name)}
            alt={product.name}
            className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? 'scale-105' : 'scale-100'}`}
          />
        </Link>
        <p id={product.titleId} className="sr-only" aria-hidden="true">{product.name}</p>
        <p id={product.descId} className="sr-only" aria-hidden="true">{product.description}</p>

        {showQuickAdd && (
          <button
            onClick={handleQuickAdd}
            className={`absolute bottom-4 left-4 right-4 bg-white text-velmora-charcoal py-3 text-xs uppercase tracking-[0.15em] flex items-center justify-center gap-2 transition-all duration-300 hover:bg-velmora-charcoal hover:text-white ${
              hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            {added ? 'Added' : 'Quick Add'}
          </button>
        )}
      </div>

      <div className="text-center">
        <Link to={`/products/${product.slug}`}>
          <h3 className="font-serif text-base md:text-lg tracking-[0.1em] uppercase mb-1 group-hover:text-velmora-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-velmora-muted">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
