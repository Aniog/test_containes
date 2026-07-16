import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
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
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3x4] overflow-hidden bg-brand-ivory">
          <img
            data-strk-img-id={`bestseller-${product.id}-1`}
            data-strk-img={`[bestseller-desc-${product.id}] [bestseller-name-${product.id}] gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            data-strk-img-id={`bestseller-${product.id}-2`}
            data-strk-img={`[bestseller-desc-${product.id}] [bestseller-name-${product.id}] gold jewelry worn`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />

          {/* Quick add overlay */}
          <div
            className={`absolute bottom-0 left-0 right-0 bg-brand-warm-black/90 text-white py-3 flex items-center justify-center gap-2 transition-transform duration-300 ${hovered ? 'translate-y-0' : 'translate-y-full'}`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span className="text-[11px] tracking-extra-wide uppercase font-sans">
              Quick Add
            </span>
          </div>
        </div>
      </Link>

      <div className="mt-3">
        <Link to={`/product/${product.id}`}>
          <h3
            id={`bestseller-name-${product.id}`}
            className="product-name text-sm font-medium text-brand-warm-black"
          >
            {product.name}
          </h3>
        </Link>
        <p
          id={`bestseller-desc-${product.id}`}
          className="text-xs text-brand-warm-gray font-sans mt-0.5"
        >
          {product.description}
        </p>
        <p className="text-sm font-sans font-medium text-brand-warm-black mt-1">
          ${product.price}
        </p>
      </div>

      {/* Quick add button (mobile-friendly) */}
      <button
        onClick={(e) => {
          e.preventDefault();
          addItem(product);
        }}
        className="md:hidden mt-2 w-full border border-brand-gold text-brand-gold text-[11px] tracking-extra-wide uppercase font-sans py-2 hover:bg-brand-gold hover:text-white transition-colors"
      >
        Add to Bag
      </button>
    </div>
  );
};

const Bestsellers = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = products.filter((p) => p.bestseller);

  return (
    <section ref={containerRef} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-warm-black tracking-wide">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-brand-gold text-brand-gold text-xs tracking-ultra-wide uppercase font-sans font-medium px-10 py-3 hover:bg-brand-gold hover:text-white transition-colors duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
