import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product, index }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden aspect-[3/4] bg-brand-ivory no-underline">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] [bestsellers-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-500 ${hovered ? 'scale-105 opacity-0' : 'scale-100 opacity-100'}`}
        />
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] [bestsellers-title] gold jewelry close up`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'scale-100 opacity-100' : 'scale-105 opacity-0'}`}
        />

        {/* Quick add button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addItem(product);
          }}
          className={`absolute bottom-4 left-4 right-4 py-3 bg-brand-charcoal text-brand-cream text-xs tracking-wider uppercase font-sans border-none transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          Add to Cart
        </button>
      </Link>

      {/* Product info */}
      <div className="mt-4">
        <h3 id={product.titleId} className="font-serif text-sm uppercase tracking-product text-brand-charcoal">
          {product.name}
        </h3>
        <p id={product.descId} className="text-xs text-brand-muted mt-1 font-sans">
          {product.shortDesc}
        </p>
        <p className="text-sm font-sans text-brand-charcoal mt-2">${product.price}</p>
      </div>
    </div>
  );
};

const Bestsellers = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 id="bestsellers-title" className="font-serif text-3xl md:text-4xl font-light text-brand-charcoal">
            Bestsellers
          </h2>
          <p className="font-sans text-sm text-brand-muted mt-3">Our most-loved pieces, chosen by you</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block px-8 py-3 border border-brand-charcoal text-brand-charcoal text-sm tracking-wider uppercase font-sans hover:bg-brand-charcoal hover:text-brand-cream transition-all duration-300 no-underline"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
