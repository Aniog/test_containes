import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { ShoppingBag } from 'lucide-react';

const ProductCard = ({ product, index = 0 }) => {
  const { addItem } = useCart();

  return (
    <article className="group relative">
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3x4] overflow-hidden bg-brand-ivory mb-3">
          <img
            data-strk-img-id={`${product.imgId}-card`}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Second image on hover */}
          <img
            data-strk-img-id={`${product.imgId}-card-hover`}
            data-strk-img={`[${product.descId}] ${product.images[1] || ''} [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />

          {/* Quick add button */}
          <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product);
              }}
              className="w-full bg-brand-charcoal/90 text-white text-xs tracking-extra-wide uppercase font-sans py-2.5 flex items-center justify-center gap-2 hover:bg-brand-gold transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      <div>
        <h3 id={product.titleId} className="product-name text-sm text-brand-charcoal mb-1">
          <Link to={`/product/${product.slug}`} className="hover:text-brand-gold transition-colors">
            {product.name}
          </Link>
        </h3>
        <p id={product.descId} className="text-xs text-brand-muted font-sans mb-1">{product.description}</p>
        <p className="text-sm font-sans font-medium text-brand-charcoal">${product.price}</p>
      </div>
    </article>
  );
};

export default ProductCard;
