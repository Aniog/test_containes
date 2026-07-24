import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative overflow-hidden bg-linen aspect-[3/4] mb-4">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        {/* Hover / second image */}
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry close up detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 font-sans text-[9px] tracking-widest uppercase bg-obsidian text-gold px-2.5 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
          hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
          <button
            onClick={handleAddToCart}
            className={`w-full py-3 font-sans text-[10px] tracking-widest uppercase flex items-center justify-center gap-2 transition-colors duration-200 ${
              added
                ? 'bg-obsidian text-gold'
                : 'bg-cream/95 text-ink hover:bg-gold hover:text-cream'
            }`}
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>
      </div>

      {/* Info */}
      <div>
        <p
          id={product.titleId}
          className="font-serif text-sm uppercase tracking-widest text-ink mb-1 group-hover:text-gold transition-colors duration-200"
        >
          {product.name}
        </p>
        <p id={product.descId} className="sr-only">{product.shortDescription}</p>
        <div className="flex items-center justify-between">
          <span className="font-sans text-sm text-muted">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star size={10} fill="#C9A96E" className="text-gold" />
            <span className="font-sans text-[10px] text-muted">{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Bestsellers = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-3">
              Most Loved
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink font-300">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="font-sans text-xs tracking-widest uppercase text-muted hover:text-gold transition-colors flex items-center gap-2 self-start md:self-auto"
          >
            View All
            <span className="w-8 h-px bg-current inline-block" />
          </Link>
        </div>

        {/* Grid */}
        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
