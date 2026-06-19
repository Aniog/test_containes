import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block" aria-label={`${product.name} — $${product.price}`}>
        {/* Image container */}
        <div className="relative aspect-[3x4] overflow-hidden bg-velmora-divider/30">
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}] bestsellers`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {/* Quick add overlay */}
          <div
            className={`absolute bottom-0 left-0 right-0 bg-velmora-charcoal/90 py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
              hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
          >
            <ShoppingBag className="w-4 h-4 text-velmora-gold" aria-hidden="true" />
            <span className="text-xs font-sans font-semibold tracking-product uppercase text-velmora-cream">
              Quick Add
            </span>
          </div>
        </div>
      </Link>

      {/* Product info */}
      <div className="mt-3">
        <h3
          id={product.titleId}
          className="font-serif text-sm uppercase tracking-product text-velmora-charcoal"
        >
          <Link to={`/product/${product.id}`} className="hover:text-velmora-gold transition-colors">
            {product.name}
          </Link>
        </h3>
        <p
          id={product.descId}
          className="text-xs text-velmora-muted font-sans mt-1"
        >
          {product.description}
        </p>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm font-sans font-medium text-velmora-charcoal">${product.price}</span>
          <div className="flex items-center gap-0.5" aria-label={`Rating: ${product.rating} out of 5`}>
            <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" aria-hidden="true" />
            <span className="text-xs text-velmora-muted font-sans">{product.rating}</span>
          </div>
        </div>
      </div>

      {/* Quick add button (always visible on mobile) */}
      <button
        onClick={(e) => {
          e.preventDefault();
          addItem(product, product.tone[0], 1);
        }}
        className="md:hidden mt-2 w-full py-2 border border-velmora-gold text-velmora-gold text-xs font-sans font-semibold tracking-product uppercase hover:bg-velmora-gold hover:text-white transition-colors"
        aria-label={`Add ${product.name} to bag`}
      >
        Add to Bag
      </button>
    </div>
  );
}

export default function Bestsellers() {
  const [sectionRef, revealed] = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      className={`py-16 md:py-24 transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      aria-labelledby="bestsellers-heading"
    >
      <div className="max-w-content mx-auto px-5 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 id="bestsellers-heading" className="font-serif text-3xl md:text-4xl text-velmora-charcoal font-light tracking-wide">
            Bestsellers
          </h2>
          <p className="mt-2 font-serif text-base text-velmora-muted italic">
            Our most loved pieces, chosen by you
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
