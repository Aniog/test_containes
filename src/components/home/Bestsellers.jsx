import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { products } from '@/api/mockData';
import { useCart } from '@/context/CartContext';
import { ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Bestsellers = () => {
  const { addToCart } = useCart();
  const bestsellers = products.slice(0, 5);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gold-600 font-bold mb-4 block">Our Curation</span>
        <h2 className="text-3xl md:text-4xl font-serif text-luxury-black tracking-widest uppercase">The Bestsellers</h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
        {bestsellers.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative aspect-[4/5] bg-gray-50 overflow-hidden mb-4">
              <Link to={`/product/${product.id}`} className="block w-full h-full">
                <img
                  data-strk-img-id={`bestseller-${product.id}`}
                  data-strk-img={`[product-name-${product.id}] jewelry gold luxury`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </Link>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(product, 1);
                }}
                className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm py-3 text-[10px] uppercase tracking-[0.2em] font-bold translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-3 h-3" />
                Quick Add
              </button>
            </div>

            <div className="text-center">
              <Link to={`/product/${product.id}`}>
                <h3 id={`product-name-${product.id}`} className="text-[10px] font-bold uppercase tracking-[0.2em] text-luxury-black mb-1 group-hover:text-gold-600 transition-colors">
                  {product.name}
                </h3>
              </Link>
              <p className="text-sm font-serif text-luxury-black/60">${product.price}.00</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link to="/shop" className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-luxury-black pb-1 hover:text-gold-600 hover:border-gold-600 transition-all">
          View All Pieces
        </Link>
      </div>
    </section>
  );
};

export default Bestsellers;
