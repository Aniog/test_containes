import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <article
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-cream aspect-[3/4]">
        {/* Primary image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            hovered ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {/* Hover / alt image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          data-strk-img-id={product.imgId2}
          data-strk-img={`gold jewelry worn model [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          alt={`${product.name} worn`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Tags */}
        {product.tags?.includes('bestseller') && (
          <span className="absolute top-3 left-3 bg-velvet text-ivory text-[10px] uppercase tracking-widest font-sans px-2.5 py-1">
            Bestseller
          </span>
        )}
        {product.tags?.includes('new') && (
          <span className="absolute top-3 right-3 bg-gold text-velvet text-[10px] uppercase tracking-widest font-sans px-2.5 py-1">
            New
          </span>
        )}

        {/* Quick add overlay */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-velvet/90 backdrop-blur-sm py-3 px-4 flex items-center justify-center gap-2 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="flex items-center gap-2 text-ivory text-xs uppercase tracking-widest font-sans font-medium hover:text-gold transition-colors"
          >
            <ShoppingBag size={14} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="pt-4 pb-2">
        <Link to={`/product/${product.slug}`}>
          <h3
            id={product.titleId}
            className="font-serif text-sm uppercase tracking-widest2 text-velvet hover:text-gold transition-colors duration-200 leading-tight line-clamp-2"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="sr-only">{product.shortDesc}</p>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={10}
                style={i < Math.floor(product.rating) ? { color: '#c9a96e', fill: '#c9a96e' } : { color: '#d9d2c5', fill: '#d9d2c5' }}
              />
            ))}
            <span className="text-[10px] text-mink font-sans ml-1">({product.reviewCount})</span>
          </div>
          <p className="font-sans text-sm font-medium text-charcoal">${product.price}</p>
        </div>
      </div>
    </article>
  );
};

const Bestsellers = ({ products }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest font-sans text-gold mb-3">Curated for You</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velvet font-light">Bestsellers</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5 opacity-60" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-velvet text-velvet text-xs uppercase tracking-widest font-sans font-medium px-10 py-3.5 hover:bg-velvet hover:text-ivory transition-all duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
};

export { ProductCard };
export default Bestsellers;
