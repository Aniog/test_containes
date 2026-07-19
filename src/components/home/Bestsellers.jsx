import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Bestsellers() {
  const { addItem } = useCart();
  const [hoveredId, setHoveredId] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide">Bestsellers</h2>
          <p className="text-warm-gray text-sm mt-3 max-w-md mx-auto">
            Our most-loved pieces, chosen by you.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.id}`} className="block relative bg-white shadow-soft hover:shadow-soft-hover transition-shadow duration-300">
                <div className="aspect-[3/4] relative overflow-hidden bg-cream">
                  <img
                    data-strk-img-id={`product-${product.id}-img`}
                    data-strk-img={`[product-${product.id}-name]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addItem(product, 'Gold', 1);
                    }}
                    className={`absolute bottom-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-bronze hover:text-white transition-all duration-300 ${
                      hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}
                    aria-label="Add to cart"
                  >
                    <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                </div>
                <div className="p-3 md:p-4">
                  <div className="flex items-center gap-1 mb-1">
                    <Star className="w-3 h-3 fill-star-gold text-star-gold" />
                    <span className="text-[11px] text-warm-gray">{product.rating}</span>
                  </div>
                  <h3
                    id={`product-${product.id}-name`}
                    className="font-serif text-xs md:text-sm uppercase tracking-widest-xl truncate"
                  >
                    {product.name}
                  </h3>
                  <p className="text-sm font-medium mt-1">${product.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
