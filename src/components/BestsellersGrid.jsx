import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { products } from '@/data/products.js';
import { useCart } from '@/context/CartContext.jsx';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [hovered, setHovered] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, product.toneOptions[0]);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-velmora-parchment overflow-hidden mb-4">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img={`[product-${product.id}-desc] [product-${product.id}-name]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          data-strk-img-id={`bestseller-${product.id}`}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 ${hovered ? 'scale-105 opacity-0' : 'scale-100 opacity-100'}`}
        />
        {/* Hover image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img={`[product-${product.id}-name] worn model jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          data-strk-img-id={`bestseller-hover-${product.id}`}
          alt={`${product.name} worn`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${hovered ? 'scale-100 opacity-100' : 'scale-105 opacity-0'}`}
        />

        {/* Quick Add */}
        <button
          onClick={handleAdd}
          className={`absolute bottom-4 left-4 right-4 py-3 bg-white/95 backdrop-blur-sm text-velmora-charcoal font-sans text-xs font-medium tracking-widest-lg uppercase flex items-center justify-center gap-2 transition-all duration-300 hover:bg-velmora-charcoal hover:text-white ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          Quick Add
        </button>

        {/* Tags */}
        {product.tags.includes('bestseller') && (
          <span className="absolute top-3 left-3 px-2.5 py-1 bg-velmora-gold text-white text-[10px] font-sans font-medium tracking-widest uppercase">
            Bestseller
          </span>
        )}
        {product.tags.includes('new') && (
          <span className="absolute top-3 right-3 px-2.5 py-1 bg-velmora-charcoal text-white text-[10px] font-sans font-medium tracking-widest uppercase">
            New
          </span>
        )}
      </div>

      {/* Text */}
      <h3
        id={`product-${product.id}-name`}
        className="font-sans text-xs font-medium tracking-widest-lg uppercase text-velmora-charcoal mb-1"
      >
        {product.name}
      </h3>
      <p id={`product-${product.id}-desc`} className="hidden">{product.description}</p>
      <p className="font-sans text-sm text-velmora-stone">
        ${product.price}
        {product.originalPrice && (
          <span className="ml-2 text-velmora-sand line-through text-xs">
            ${product.originalPrice}
          </span>
        )}
      </p>
    </Link>
  );
}

export default function BestsellersGrid() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = products.filter((p) => p.tags.includes('bestseller'));

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-widest-xl uppercase text-velmora-gold mb-3">
            Curated Selection
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-velmora-charcoal font-light">
            Our Bestsellers
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}