import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/lib/CartContext';

const bestsellers = products.filter((p) => p.isBestseller);

export default function Bestsellers() {
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 section-padding">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl tracking-wider text-brand-ink">Bestsellers</h2>
          <p className="text-brand-warmgray text-sm mt-3">The pieces everyone is wearing</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden bg-brand-sand/20 aspect-[3/4] mb-4">
                <img
                  alt={product.images[0].alt}
                  data-strk-img-id={`bestseller-${product.id}-img-8f2a`}
                  data-strk-img={`[bestseller-${product.id}-desc] [bestseller-${product.id}-name]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {product.isNew && (
                  <span className="absolute top-3 left-3 bg-brand-gold text-white text-[10px] uppercase tracking-wider px-2 py-0.5">
                    New
                  </span>
                )}

                {/* Hover quick add */}
                <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addItem(product);
                    }}
                    className="w-full bg-brand-ink text-white text-xs uppercase tracking-wider py-2.5 hover:bg-brand-gold transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Add to Cart
                  </button>
                </div>
              </div>

              <Link to={`/product/${product.id}`} className="block">
                <h3
                  id={`bestseller-${product.id}-name`}
                  className="font-serif text-xs md:text-sm tracking-[0.12em] uppercase text-brand-ink group-hover:text-brand-gold-dark transition-colors"
                >
                  {product.name}
                </h3>
                <p
                  id={`bestseller-${product.id}-desc`}
                  className="sr-only"
                >
                  {product.description}
                </p>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(product.rating)
                            ? 'fill-brand-gold text-brand-gold'
                            : 'fill-brand-sand text-brand-sand'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] text-brand-warmgray">({product.reviewCount})</span>
                </div>
                <p className="text-sm text-brand-charcoal mt-1">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
