import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

const bestsellers = products.filter((p) => p.featured);

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative aspect-[3/4] bg-velmora-cream-dark overflow-hidden rounded-sm mb-4">
        {/* Primary image */}
        <img
          data-strk-img-id={`bestseller-${product.id}-1`}
          data-strk-img={`[${product.id}-desc] ${product.name} gold jewelry product photography on neutral background`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Hover overlay with quick add */}
        <div className="absolute inset-0 bg-velmora-charcoal/0 group-hover:bg-velmora-charcoal/30 transition-all duration-500 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product, product.variants?.[0] || 'Gold');
            }}
            className="bg-velmora-cream text-velmora-charcoal px-6 py-2.5 text-[11px] font-sans font-semibold uppercase tracking-[0.15em] hover:bg-white transition-colors transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300"
          >
            Add to Cart
          </button>
        </div>
        {/* Hidden description for img query interpolation */}
        <span id={`${product.id}-desc`} className="sr-only">{product.shortDescription}</span>
      </div>

      <div className="text-center">
        <h3 className="font-serif text-sm md:text-base tracking-[0.12em] uppercase text-velmora-charcoal group-hover:text-velmora-gold transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-xs text-velmora-muted mt-1 font-sans">${product.price}</p>
      </div>
    </Link>
  );
}

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-24 px-5 md:px-8 max-w-[1400px] mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal mb-3">Bestsellers</h2>
        <div className="w-12 h-px bg-velmora-gold mx-auto" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
