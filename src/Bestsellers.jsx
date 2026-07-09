import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { bestsellers } from './data-products.js';
import { useCart } from './cart-context.jsx';

export default function Bestsellers() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
      <div className="text-center mb-14">
        <p className="text-xs tracking-[0.2em] text-velmora-gold uppercase mb-3">Curated</p>
        <h2 className="font-serif text-3xl lg:text-4xl tracking-wide">Bestsellers</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/shop" className="btn-ghost">
          View All Products
        </Link>
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [imgIdx, setImgIdx] = useState(0);
  const { addToCart } = useCart();

  const handleHover = () => {
    setHovered(true);
    if (product.images.length > 1) setImgIdx(1);
  };

  const handleLeave = () => {
    setHovered(false);
    setImgIdx(0);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.variants[0], 1);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-velmora-sand overflow-hidden mb-4">
        <img
          data-strk-img-id={`bestseller-${product.id}-${imgIdx}`}
          data-strk-img={`[product-name-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span id={`product-name-${product.id}`} className="sr-only">{product.name}</span>

        {/* Quick add button */}
        {hovered && (
          <button
            onClick={handleAdd}
            className="absolute bottom-3 left-3 right-3 py-2.5 bg-white/95 backdrop-blur-sm text-velmora-charcoal text-xs tracking-wider uppercase flex items-center justify-center gap-2 animate-fade-in hover:bg-velmora-gold hover:text-white transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Bag
          </button>
        )}
      </div>

      {/* Info */}
      <p className="font-serif text-xs tracking-[0.15em] text-velmora-charcoal uppercase mb-1">{product.name}</p>
      <div className="flex items-center gap-1 mb-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-3 h-3 ${i < Math.round(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'fill-none text-velmora-border'}`} />
        ))}
        <span className="text-[11px] text-velmora-stone ml-1">({product.reviewCount})</span>
      </div>
      <p className="text-sm text-velmora-gold">${product.price}</p>
    </Link>
  );
}
