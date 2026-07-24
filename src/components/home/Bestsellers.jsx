import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ShoppingBag } from 'lucide-react';
import { getBestsellers } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Bestsellers = () => {
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const bestsellers = getBestsellers();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 lg:py-28 bg-velmora-cream">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest-2xl text-velmora-taupe mb-4">
            Most Loved
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-ink">
            Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 lg:gap-x-8 lg:gap-y-14">
          {bestsellers.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/product/${product.id}`} className="group block">
                {/* Image */}
                <div className="relative aspect-[3/4] bg-velmora-sand overflow-hidden mb-4">
                  <img
                    data-strk-img-id={product.images[0].id}
                    data-strk-img={`[bestseller-${product.id}-subtitle] [bestseller-${product.id}-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-velmora-ink/80 text-velmora-cream text-[10px] uppercase tracking-wider px-3 py-1">
                      {product.badge}
                    </span>
                  )}
                  {/* Quick add on hover */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addItem(product, product.variants[0].id);
                    }}
                    className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm text-velmora-ink py-3 text-xs uppercase tracking-widest font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Quick Add
                  </button>
                </div>

                {/* Info */}
                <div className="text-center">
                  <p
                    id={`bestseller-${product.id}-title`}
                    className="font-serif text-sm uppercase tracking-widest-xl text-velmora-ink mb-1"
                  >
                    {product.name}
                  </p>
                  <p
                    id={`bestseller-${product.id}-subtitle`}
                    className="text-xs text-velmora-taupe mb-2"
                  >
                    {product.subtitle}
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <div className="flex items-center gap-0.5">
                      <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
                      <span className="text-xs text-velmora-brown">
                        {product.rating}
                      </span>
                    </div>
                    <span className="text-velmora-stone">|</span>
                    <span className="text-sm font-medium text-velmora-ink">
                      ${product.price}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/shop"
            className="inline-block border border-velmora-ink text-velmora-ink px-10 py-3.5 text-xs uppercase tracking-widest font-medium hover:bg-velmora-ink hover:text-velmora-cream transition-colors"
          >
            Shop All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
