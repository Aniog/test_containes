import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Bestsellers() {
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const bestsellers = products.filter(p => p.isBestseller);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    const variant = product.variants.find(v => v.id === product.defaultVariant) || product.variants[0];
    addItem(product, variant, 1);
  };

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Most Loved</p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink">Bestsellers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group block"
            >
              <div className="relative aspect-[3/4] bg-ivory overflow-hidden mb-3">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                  data-strk-img-id={`bestseller-${product.id}`}
                  data-strk-img={`[product-desc-${product.id}] [product-name-${product.id}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300" />
                {/* Quick add button */}
                <button
                  onClick={(e) => handleQuickAdd(e, product)}
                  className="absolute bottom-3 left-3 right-3 bg-warm-white text-ink py-2.5 text-[10px] tracking-[0.2em] uppercase font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 hover:bg-gold"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Quick Add
                </button>
              </div>
              <div className="text-center">
                <h3
                  id={`product-name-${product.id}`}
                  className="font-serif text-xs md:text-sm tracking-[0.15em] uppercase text-ink group-hover:text-gold transition-colors duration-300"
                >
                  {product.name}
                </h3>
                <p id={`product-desc-${product.id}`} className="hidden">{product.shortDesc}</p>
                <div className="flex items-center justify-center gap-1.5 mt-1.5">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-champagne'}`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] text-muted">({product.reviews})</span>
                </div>
                <p className="text-sm font-medium mt-1.5">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
