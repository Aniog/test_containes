import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import strkImgConfig from '@/strk-img-config.json';

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      {/* Image container */}
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-bg-warm aspect-[4/5]">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[product-name-${product.id}] bestseller jewelry 18K gold`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Hover overlay with quick add */}
        <div className="absolute inset-0 bg-bg-deep/0 group-hover:bg-bg-deep/30 transition-all duration-500 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product);
            }}
            className="flex items-center gap-2 bg-bg-deep/90 backdrop-blur-sm text-text-primary px-6 py-2.5 text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-gold hover:text-bg-deep transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Bag
          </button>
        </div>
      </Link>

      {/* Product info */}
      <div className="pt-4 text-center">
        <span id={`product-name-${product.id}`} className="hidden">{product.name}</span>
        <Link to={`/product/${product.slug}`}>
          <h3 className="font-serif text-sm md:text-base tracking-[0.2em] text-text-primary hover:text-gold transition-colors duration-300 mb-1.5">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-center gap-1.5 mb-1.5">
          <Star className="w-3 h-3 text-gold fill-gold" />
          <span className="text-xs text-text-secondary">{product.rating}</span>
        </div>
        <p className="text-sm text-gold font-medium">${product.price}</p>
      </div>
    </div>
  );
}

export default function Bestsellers() {
  const containerRef = useRef(null);
  const bestsellers = products.filter(p => p.bestseller);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold font-sans font-medium mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.1em] text-text-primary">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16">
          <Link
            to="/shop"
            className="inline-block border border-gold text-gold px-10 py-3 text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold hover:text-bg-deep transition-all duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
