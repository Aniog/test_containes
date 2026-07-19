import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-velmora-muted overflow-hidden mb-4">
          {/* Primary Image */}
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              hovered ? 'opacity-0' : 'opacity-100'
            }`}
            data-strk-img-id={`bestseller-${product.id}-primary`}
            data-strk-img={`[bestseller-title-${product.id}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
          />
          {/* Secondary Image */}
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
            data-strk-img-id={`bestseller-${product.id}-secondary`}
            data-strk-img={`[bestseller-title-${product.id}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
          />
          {/* Quick Add */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(product, 1, product.tone[0]);
            }}
            className={`absolute bottom-0 left-0 right-0 py-3 bg-velmora-espresso/90 text-white font-sans text-xs font-medium tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-300 ${
              hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Quick Add
          </button>
        </div>
      </Link>
      <div className="text-center">
        <Link to={`/product/${product.id}`}>
          <h3
            id={`bestseller-title-${product.id}`}
            className="font-serif text-sm md:text-base tracking-[0.2em] uppercase font-medium hover:text-velmora-gold transition-colors"
          >
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-center gap-1.5 mt-1.5">
          <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
          <span className="text-xs text-velmora-warmgray">
            {product.rating} ({product.reviews})
          </span>
        </div>
        <p className="font-sans text-sm font-medium mt-1.5">${product.price}</p>
      </div>
    </div>
  );
};

const Bestsellers = () => {
  const sectionRef = useRef(null);
  const bestsellers = products.filter((p) => p.isBestseller);

  useEffect(() => {
    if (sectionRef.current) {
      return ImageHelper.loadImages(strkImgConfig, sectionRef.current);
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-velmora-gold mb-3">
            Shop the Favorites
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-velmora-espresso">
            Bestsellers
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block px-10 py-3.5 border border-velmora-espresso text-velmora-espresso font-sans text-xs font-semibold tracking-[0.25em] uppercase hover:bg-velmora-espresso hover:text-white transition-colors duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
