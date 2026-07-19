import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-velmora-muted overflow-hidden mb-3">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            data-strk-img-id={`grid-${product.id}`}
            data-strk-img={`[grid-title-${product.id}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
          />
          {/* Quick Add Overlay */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(product, 1, product.tone[0]);
            }}
            className="absolute bottom-0 left-0 right-0 py-3 bg-velmora-espresso/90 text-white font-sans text-xs font-medium tracking-widest uppercase flex items-center justify-center gap-2 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Quick Add
          </button>
        </div>
      </Link>
      <Link to={`/product/${product.id}`}>
        <h3
          id={`grid-title-${product.id}`}
          className="font-serif text-sm tracking-[0.15em] uppercase font-medium hover:text-velmora-gold transition-colors"
        >
          {product.name}
        </h3>
      </Link>
      <div className="flex items-center gap-1.5 mt-1">
        <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
        <span className="text-[11px] text-velmora-warmgray">
          {product.rating}
        </span>
      </div>
      <p className="font-sans text-sm font-medium mt-1">${product.price}</p>
    </div>
  );
};

const ProductGrid = ({ products }) => {
  const gridRef = useRef(null);

  useEffect(() => {
    if (gridRef.current) {
      return ImageHelper.loadImages(strkImgConfig, gridRef.current);
    }
  }, [products]);

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-velmora-warmgray">
        <p className="font-serif text-lg">No products found</p>
        <p className="text-sm mt-1">Try adjusting your filters</p>
      </div>
    );
  }

  return (
    <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
