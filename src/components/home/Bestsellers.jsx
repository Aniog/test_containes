import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { getBestsellers } from '@/data/products';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Bestsellers() {
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const products = getBestsellers();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl uppercase tracking-wider text-foreground">
            Bestsellers
          </h2>
          <p className="text-foreground-muted text-sm mt-3 max-w-md mx-auto">
            Our most-loved pieces, chosen by women like you
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <Link to={`/product/${product.id}`} className="block">
                <div className="aspect-[3/4] bg-muted overflow-hidden relative">
                  <img
                    data-strk-img-id={`bestseller-${product.id}`}
                    data-strk-img={product.name}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover quick add */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addItem(product, 'gold', 1);
                      }}
                      className="bg-white text-foreground text-xs tracking-wider uppercase px-4 py-2.5 shadow-md hover:bg-accent hover:text-white transition-all duration-200 flex items-center gap-2"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>
              <div className="mt-3 text-center">
                <h3 className="text-xs md:text-sm tracking-wider uppercase font-medium">
                  <Link to={`/product/${product.id}`} className="hover:text-accent transition-colors">
                    {product.name}
                  </Link>
                </h3>
                <p className="text-accent font-serif text-sm mt-0.5">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}