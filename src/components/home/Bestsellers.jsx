import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Bestsellers() {
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Bestsellers</h2>
          <p className="text-sm text-warm-gray mt-2 font-sans">Our most-loved pieces, chosen by you.</p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <div key={product.id} className="group relative">
              <Link to={`/product/${product.id}`} className="block no-underline">
                <div className="relative aspect-[3/4] bg-stone/30 overflow-hidden mb-3">
                  <img
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <img
                    data-strk-img-id={product.imgId2}
                    data-strk-img={`[${product.titleId}] gold jewelry close up`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} alternate view`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>
                <h3 id={product.titleId} className="font-serif text-xs md:text-sm uppercase tracking-[0.12em] text-charcoal mb-1">
                  {product.name}
                </h3>
                <p className="text-sm font-sans text-warm-gray">${product.price}</p>
                <p id={product.descId} className="sr-only">{product.description}</p>
              </Link>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  addItem(product);
                }}
                className="absolute bottom-[72px] left-0 right-0 mx-2 bg-white/95 backdrop-blur-sm text-charcoal py-2.5 text-xs font-sans font-medium uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 border border-stone hover:bg-gold hover:text-white hover:border-gold cursor-pointer"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="inline-block border border-gold text-gold px-8 py-3 text-sm font-sans font-medium uppercase tracking-widest hover:bg-gold hover:text-white transition-colors no-underline"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
