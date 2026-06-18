import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

export default function Bestsellers() {
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const bestsellers = products.filter(p => p.tags.includes('bestseller')).slice(0, 5);

  const displayProducts = bestsellers.length >= 5
    ? bestsellers
    : [...bestsellers, ...products.filter(p => !p.tags.includes('bestseller'))].slice(0, 5);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-3">Bestsellers</h2>
          <p className="font-sans text-sm text-warm-gray">The pieces our community can't stop wearing</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {displayProducts.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={addItem} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="group relative">
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] bg-gold-light overflow-hidden mb-3">
          <img
            alt={product.name}
            data-strk-img-id={`bestseller-${product.id}-x9y8z7`}
            data-strk-img={`[bestseller-name-${product.id}] gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onAddToCart(product);
              }}
              className="px-4 py-2 bg-white text-charcoal font-sans text-xs uppercase tracking-widest hover:bg-gold hover:text-white transition-colors border-none transform translate-y-2 group-hover:translate-y-0 duration-300"
            >
              Add to Cart
            </button>
          </div>
          {product.tags.includes('new') && (
            <span className="absolute top-2 left-2 px-2 py-0.5 bg-gold text-white text-[10px] font-sans uppercase tracking-wider">
              New
            </span>
          )}
        </div>
      </Link>
      <div className="text-center">
        <h3 id={`bestseller-name-${product.id}`} className="font-serif text-xs uppercase tracking-widest text-charcoal mb-1 truncate">
          {product.name}
        </h3>
        <p className="font-sans text-sm text-warm-gray">${product.price}</p>
      </div>
    </div>
  );
}
