import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

function ProductCard({ product }) {
  const { addItem } = useCart();
  const nameId = `bs-product-name-${product.id}`;
  const descId = `bs-product-desc-${product.id}`;
  const imgId = `bs-product-img-${product.id}`;

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-muted-bg overflow-hidden">
          <span id={descId} className="sr-only">{product.description}</span>
          <img
            alt={product.name}
            data-strk-img-id={imgId}
            data-strk-img={`[${descId}] [${nameId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Quick add overlay */}
          <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product);
              }}
              className="w-full py-2.5 bg-charcoal text-white text-xs font-medium tracking-wide uppercase hover:bg-accent transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <div className="mt-3">
        <Link to={`/product/${product.id}`}>
          <h3 id={nameId} className="font-serif text-sm font-medium tracking-product uppercase text-charcoal">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-muted mt-1">${product.price}</p>
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
    <section className="py-16 md:py-24 px-5 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-charcoal">
            Bestsellers
          </h2>
          <p className="text-sm text-muted mt-3">Our most-loved pieces, chosen by you</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="inline-block px-8 py-3 border border-accent text-accent text-sm font-medium tracking-wide uppercase hover:bg-accent hover:text-white transition-all duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
