import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/lib/CartContext';
import { ShoppingBag } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-velmora-beige mb-4">
          {/* Primary Image */}
          <img
            data-strk-img-id={`product-${product.id}-main`}
            data-strk-img={`[product-${product.id}-name] luxury gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Hover Image */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <img
              data-strk-img-id={`product-${product.id}-hover`}
              data-strk-img={`[product-${product.id}-name] worn lifestyle gold jewelry`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
              alt={`${product.name} lifestyle`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quick Add */}
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="absolute bottom-0 left-0 w-full bg-white/95 text-velmora-dark py-3 text-[10px] uppercase tracking-[0.2em] font-bold translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-3 h-3" />
            Quick Add
          </button>
        </div>

        <div className="text-center px-2">
          <h3 id={`product-${product.id}-name`} className="font-serif text-sm uppercase tracking-[0.15em] mb-1 group-hover:text-velmora-gold transition-colors">
            {product.name}
          </h3>
          <p className="text-xs text-velmora-muted font-sans tracking-wide">
            ${product.price}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
