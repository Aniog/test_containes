import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group relative">
      {/* Image */}
      <div className="relative aspect-[3/4] bg-secondary/20 overflow-hidden mb-4">
        <img
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-foreground text-background text-xs tracking-widest uppercase px-3 py-1">
            {product.badge}
          </span>
        )}
        {/* Quick add */}
        <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <button
            onClick={() => addToCart(product, product.variants[0])}
            className="w-full bg-foreground text-background py-3 text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <Link to={`/product/${product.id}`}>
        <h3 id={product.titleId} className="product-name text-sm mb-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-1 mb-1">
          <Star className="w-3 h-3 fill-primary text-primary" />
          <span className="text-xs text-muted-foreground">{product.rating}</span>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>
        <p className="text-sm font-medium">${product.price}</p>
      </Link>
    </div>
  );
};

const BestsellersSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">Most Loved</p>
          <h2 className="serif-heading text-4xl md:text-5xl">Bestsellers</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestsellersSection;
