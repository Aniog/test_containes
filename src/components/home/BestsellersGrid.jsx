import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { Star, ShoppingBag } from 'lucide-react';

export default function BestsellersGrid() {
  const containerRef = useRef(null);
  const [hoveredId, setHoveredId] = useState(null);
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest uppercase text-accent mb-3">Curated for You</p>
          <h2 className="serif-heading text-3xl md:text-4xl lg:text-5xl">Bestsellers</h2>
          <div className="w-12 h-px bg-accent mx-auto mt-6" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <div
              key={product.id}
              className="group"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] bg-surface overflow-hidden mb-4">
                {product.badge && (
                  <span className="absolute top-3 left-3 z-10 bg-accent text-white text-[10px] tracking-widest uppercase px-2 py-1">
                    {product.badge}
                  </span>
                )}
                <img
                  data-strk-img-id={product.images[0].id}
                  data-strk-img={`[${product.images[0].id}-text] [${product.id}-name] [bestsellers-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Hover second image */}
                <img
                  data-strk-img-id={`${product.images[0].id}-hover`}
                  data-strk-img={`[${product.images[1].id}-text] [${product.id}-name] [bestsellers-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                />
                {/* Quick add */}
                <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
                  hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <button
                    onClick={() => addItem(product, product.variants[0])}
                    className="w-full bg-white/95 backdrop-blur-sm text-primary text-xs tracking-widest uppercase py-3 flex items-center justify-center gap-2 hover:bg-accent hover:text-white transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Product info */}
              <Link to={`/product/${product.id}`}>
                <p id={`${product.id}-name`} className="product-name text-xs md:text-sm text-primary group-hover:text-accent transition-colors">
                  {product.name}
                </p>
                <div className="flex items-center gap-1 mt-1.5">
                  <Star className="w-3 h-3 fill-accent text-accent" />
                  <span className="text-xs text-muted">{product.rating}</span>
                </div>
                <p className="text-sm mt-1.5 text-secondary">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline inline-block">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
