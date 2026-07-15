import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden aspect-[3/4] bg-brand-ivory">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] [bestsellers-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Quick add overlay */}
        <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="w-full bg-brand-charcoal/90 text-brand-cream font-sans text-xs tracking-widest uppercase py-3 hover:bg-brand-charcoal transition-colors border-none cursor-pointer backdrop-blur-sm"
          >
            Add to Cart
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="mt-4 text-center">
        <h3 id={product.titleId} className="font-serif text-xs tracking-product uppercase text-brand-charcoal mb-1">
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">{product.description}</p>
        <p className="font-sans text-sm text-brand-muted">${product.price}</p>
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
          <h2 id="bestsellers-title" className="font-serif text-3xl md:text-5xl font-light text-brand-charcoal">
            Bestsellers
          </h2>
          <p className="font-sans text-sm text-brand-muted mt-3">The pieces our community can't stop wearing</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block font-sans text-xs tracking-widest uppercase text-brand-charcoal border-b border-brand-charcoal pb-1 hover:border-brand-gold hover:text-brand-gold transition-colors no-underline"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
