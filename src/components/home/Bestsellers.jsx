import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import StarRating from '@/components/ui/StarRating';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1, 'gold');
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-surface border border-hairline overflow-hidden mb-3">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
          data-strk-img-id={`bestseller-${product.id}`}
          data-strk-img={`[bestseller-name-${product.id}] [bestseller-category] [section-bestsellers-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
        />
        {/* Quick add button */}
        <button
          onClick={handleAdd}
          className={`absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm text-primary text-xs font-medium uppercase tracking-wider py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <ShoppingBag size={14} />
          Quick Add
        </button>
      </div>
      <div className="px-1">
        <h3
          id={`bestseller-name-${product.id}`}
          className="font-serif text-sm font-medium uppercase tracking-wider text-primary mb-1"
        >
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mb-1">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[11px] text-muted">({product.reviews})</span>
        </div>
        <p className="font-serif text-sm font-medium text-primary">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}

export default function Bestsellers() {
  const containerRef = useRef(null);
  const bestsellers = products.filter((p) => p.bestseller);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-base">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h2
            id="section-bestsellers-title"
            className="font-serif text-3xl md:text-4xl font-medium text-primary mb-3"
          >
            Bestsellers
          </h2>
          <p className="text-sm text-secondary max-w-md mx-auto">
            Our most-loved pieces, worn and adored by women around the world.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="inline-block border border-primary text-primary text-xs font-medium uppercase tracking-wider px-8 py-3.5 hover:bg-primary hover:text-white transition-all duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
