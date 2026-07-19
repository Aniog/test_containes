import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] bg-velmora-sand/30 rounded-sm overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover bg-velmora-sand/20"
          alt={product.name}
          data-strk-img-id={`product-${product.id}-thumb`}
          data-strk-img={`[product-${product.id}-name] gold jewelry elegant ${product.category}`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 px-2.5 py-1 bg-velmora-espresso text-velmora-ivory text-[10px] tracking-widest uppercase font-medium rounded-sm">
            {product.badge}
          </span>
        )}
        {/* Hover overlay with quick add */}
        <div className={`absolute inset-x-0 bottom-0 p-3 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product, 'gold', 1);
            }}
            className="w-full py-3 bg-velmora-ivory/95 backdrop-blur-sm text-velmora-espresso text-xs tracking-widest uppercase font-medium hover:bg-velmora-gold hover:text-velmora-charcoal transition-colors rounded-sm flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Quick Add
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="mt-4 text-center">
        <Link to={`/product/${product.id}`}>
          <h3
            id={`product-${product.id}-name`}
            className="text-xs tracking-widest uppercase font-medium text-velmora-espresso hover:text-velmora-gold transition-colors"
          >
            {product.name}
          </h3>
        </Link>
        <p className="mt-1.5 text-sm text-velmora-taupe">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
