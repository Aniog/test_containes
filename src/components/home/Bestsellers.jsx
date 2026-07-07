import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import useScrollReveal from '@/hooks/useScrollReveal';

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-brand-warm">
          <img
            data-strk-img-id={`best-${product.imgId}`}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="1x1"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            data-strk-img-id={`best-${product.imgId}-alt`}
            data-strk-img={`[${product.descId}] worn [${product.titleId}]`}
            data-strk-img-ratio="1x1"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
          <div
            className={`absolute bottom-0 left-0 right-0 bg-brand-charcoal/90 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product, 'gold', 1);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-white text-xs font-sans font-medium tracking-super-wide uppercase hover:text-brand-gold transition-colors"
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <div className="mt-3">
        <h3
          id={product.titleId}
          className="font-serif text-sm tracking-super-wide uppercase text-brand-charcoal"
        >
          {product.name}
        </h3>
        <p
          id={product.descId}
          className="text-xs text-brand-muted font-sans mt-0.5"
        >
          {product.description}
        </p>
        <p className="text-sm font-sans font-medium text-brand-charcoal mt-1">
          ${product.price}
        </p>
      </div>
    </div>
  );
}

export default function Bestsellers() {
  const containerRef = useRef(null);
  const [revealRef, revealed] = useScrollReveal();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div
        ref={revealRef}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal tracking-wide">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
