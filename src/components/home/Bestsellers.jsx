import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useStrkImages } from '@/hooks/useStrkImages';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const ProductCard = ({ product, index }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className={`group relative scroll-reveal animate-reveal-up stagger-${index + 1}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        {/* Image container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-brand-ivory">
          {/* Primary image */}
          <img
            data-strk-img-id={product.images[0].imgId}
            data-strk-img={`[${product.images[0].descId}] [${product.images[0].titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          {/* Secondary image on hover */}
          <img
            data-strk-img-id={product.images[1].imgId}
            data-strk-img={`[${product.images[1].descId}] [${product.images[1].titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} worn`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />

          {/* Quick add to cart overlay */}
          <div
            className={`absolute bottom-0 left-0 right-0 bg-brand-onyx/90 py-3 flex items-center justify-center gap-2 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product);
            }}
          >
            <ShoppingBag className="w-4 h-4 text-white" />
            <span className="text-[11px] font-sans font-semibold tracking-extra-wide uppercase text-white">
              Add to Cart
            </span>
          </div>
        </div>
      </Link>

      {/* Product info */}
      <div className="mt-4">
        <Link to={`/product/${product.id}`}>
          <h3
            id={product.images[0].titleId}
            className="font-serif text-sm tracking-super-wide uppercase text-brand-charcoal hover:text-brand-gold transition-colors"
          >
            {product.name}
          </h3>
        </Link>
        <p
          id={product.images[0].descId}
          className="text-xs text-brand-warm-gray font-sans mt-1"
        >
          {product.description}
        </p>
        <p className="text-sm font-sans font-medium text-brand-charcoal mt-2">
          ${product.price}
        </p>
      </div>
    </div>
  );
};

const Bestsellers = () => {
  const containerRef = useRef(null);
  const [revealRef, revealed] = useScrollReveal();
  useStrkImages(containerRef);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={revealRef}
          className={`text-center mb-12 md:mb-16 scroll-reveal animate-reveal-up ${revealed ? 'revealed' : ''}`}
        >
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-brand-charcoal">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Product grid */}
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 ${revealed ? 'revealed' : ''}`}>
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View all link */}
        <div className={`text-center mt-12 scroll-reveal animate-reveal-up ${revealed ? 'revealed stagger-5' : ''}`}>
          <Link
            to="/shop"
            className="inline-block border border-brand-gold text-brand-gold font-sans text-xs font-semibold tracking-super-wide uppercase px-8 py-3 hover:bg-brand-gold hover:text-white transition-colors duration-200"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
