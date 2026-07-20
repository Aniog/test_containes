import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-velmora-ivory overflow-hidden">
          <img
            data-strk-img-id={`bestseller-${product.id}`}
            data-strk-img={`[${product.id}-subtitle] [${product.id}-name]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`w-full h-full object-cover transition-transform duration-500 ease-out ${
              hovered ? 'scale-105' : 'scale-100'
            }`}
          />
          {hovered && (
            <div className="absolute inset-0 bg-velmora-deep/10 transition-opacity duration-300" />
          )}
        </div>
      </Link>

      <button
        onClick={(e) => {
          e.stopPropagation();
          addToCart(product, product.variants?.[0] || null, 1);
        }}
        className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm transition-all duration-300 opacity-100 translate-y-0 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 hover:bg-velmora-bronze hover:text-white"
      >
        <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
      </button>

      <div className="mt-4 text-center">
        <Link to={`/product/${product.id}`}>
          <h3
            id={`${product.id}-name`}
            className="font-serif text-[13px] md:text-sm uppercase tracking-[0.15em] text-velmora-deep"
          >
            {product.name}
          </h3>
          <p
            id={`${product.id}-subtitle`}
            className="text-xs text-velmora-lightgray mt-1 font-sans"
          >
            {product.subtitle}
          </p>
        </Link>
        <div className="flex items-center justify-center gap-1.5 mt-2">
          <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
          <span className="text-xs text-velmora-warmgray font-sans">{product.rating}</span>
          <span className="text-xs text-velmora-lightgray font-sans">({product.reviews})</span>
        </div>
        <p className="mt-2 font-serif text-base text-velmora-deep">${product.price}</p>
      </div>
    </div>
  );
}

export default function BestsellersGrid() {
  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <p className="text-xs font-sans uppercase tracking-[0.2em] text-velmora-bronze mb-3">Most Loved</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-deep">Bestsellers</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-velmora-deep text-velmora-deep text-[13px] font-sans uppercase tracking-[0.1em] px-10 py-3.5 hover:bg-velmora-deep hover:text-white transition-colors duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
