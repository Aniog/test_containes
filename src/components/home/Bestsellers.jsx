import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ProductCard = ({ product }) => {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      {/* Image */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-surface-card aspect-[3/4]">
        <img
          data-strk-img-id={`bestseller-${product.id}`}
          data-strk-img={`[product-desc-${product.id}] [product-name-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-gold text-surface-primary text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1">
            {product.badge}
          </span>
        )}
        {/* Quick add overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product, product.variants[0].id);
            }}
            className="w-full bg-surface-primary/90 backdrop-blur-sm text-brand-100 text-xs uppercase tracking-wider font-semibold py-3 flex items-center justify-center gap-2 hover:bg-gold hover:text-surface-primary transition-colors duration-300"
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="mt-4">
        <p id={`product-desc-${product.id}`} className="sr-only">{product.description}</p>
        <h3 id={`product-name-${product.id}`} className="product-name text-sm text-brand-100 mb-1">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mb-1.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={11}
                className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-brand-700'}
              />
            ))}
          </div>
          <span className="text-[11px] text-brand-500">({product.reviewCount})</span>
        </div>
        <p className="text-gold font-medium text-sm">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

const Bestsellers = () => {
  const sectionRef = useScrollReveal(0.1);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={sectionRef} className="reveal py-20 md:py-28">
      <div ref={containerRef} className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-mega-wide text-gold mb-3">Curated Selection</p>
          <h2 className="heading-serif text-3xl md:text-5xl text-brand-50">Bestsellers</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline">
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
