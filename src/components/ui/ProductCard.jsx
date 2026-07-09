import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/lib/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group relative">
      <Link to={`/products/${product.id}`} className="block overflow-hidden bg-platinum transition-all duration-700">
        <div className="aspect-[3/4] relative">
          {/* Main Image */}
          <img
            data-strk-img-id={`product-card-${product.id}-main`}
            data-strk-img={`[product-title-${product.id}] luxury gold jewelry product high-end editorial`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          {/* Hover Image Reveal (Mocked with opacity change if we had multiple tags) */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-black/10" />

          {/* Quick Add Overlay */}
          <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-background/90 backdrop-blur-sm lg:hidden group-hover:block">
            <button
              onClick={(e) => {
                e.preventDefault();
                addToCart(product);
              }}
              className="w-full flex items-center justify-center space-x-2 text-[10px] uppercase tracking-widest font-sans py-2 hover:text-accent transition-colors"
            >
              <ShoppingBag size={14} />
              <span>Quick Add</span>
            </button>
          </div>
        </div>
      </Link>

      <div className="mt-6 text-center">
        <h3 id={`product-title-${product.id}`} className="text-sm font-sans uppercase tracking-[0.2em] mb-1">
          {product.name}
        </h3>
        <p className="text-xs text-accent font-sans-medium tracking-wide">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
