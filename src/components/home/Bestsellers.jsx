import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
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
    addItem(product, product.tone[0], 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-brand-warm mb-3">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            hovered ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {/* Secondary image on hover */}
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.descId}] [${product.titleId}] side view`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* Quick add button */}
        <div
          className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className={`w-full text-xs tracking-extra-wide uppercase font-sans font-medium py-3 flex items-center justify-center gap-2 transition-colors duration-300 ${
              added
                ? 'bg-brand-charcoal text-white'
                : 'bg-brand-gold text-white hover:bg-brand-gold-dark'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            {added ? 'Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
      <h3
        id={product.titleId}
        className="font-serif text-sm tracking-super-wide uppercase text-brand-charcoal"
      >
        {product.name}
      </h3>
      <p id={product.descId} className="sr-only">
        {product.description}
      </p>
      <div className="flex items-center gap-2 mt-1">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.round(product.rating)
                  ? 'text-brand-gold fill-brand-gold'
                  : 'text-brand-sand'
              }`}
            />
          ))}
        </div>
        <span className="text-xs text-brand-muted font-sans">({product.reviews})</span>
      </div>
      <p className="mt-1 text-sm font-sans font-medium text-brand-charcoal">${product.price}</p>
    </Link>
  );
};

const Bestsellers = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-brand-charcoal">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="text-xs tracking-extra-wide uppercase font-sans font-medium border border-brand-gold text-brand-gold px-8 py-3 hover:bg-brand-gold hover:text-white transition-all duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
