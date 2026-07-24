import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { getRelatedProducts } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const RelatedProducts = ({ currentId }) => {
  const containerRef = useRef(null);
  const related = getRelatedProducts(currentId, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  if (related.length === 0) return null;

  return (
    <section ref={containerRef} className="py-16 lg:py-20 bg-velmora-cream border-t border-velmora-warm">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <h2 className="font-serif text-2xl md:text-3xl text-velmora-ink mb-10">
          You May Also Like
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {related.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Link to={`/product/${product.id}`} className="group block">
                <div className="aspect-[3/4] bg-velmora-sand overflow-hidden mb-3">
                  <img
                    data-strk-img-id={`related-${product.id}`}
                    data-strk-img={`[related-${product.id}-name]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p
                  id={`related-${product.id}-name`}
                  className="font-serif text-xs uppercase tracking-widest-xl text-velmora-ink truncate mb-1"
                >
                  {product.name}
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
                    <span className="text-xs text-velmora-brown">
                      {product.rating}
                    </span>
                  </div>
                  <span className="text-xs text-velmora-ink font-medium">
                    ${product.price}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
