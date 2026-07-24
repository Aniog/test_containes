import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 lg:py-28 bg-velmora-sand">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="aspect-[4/5] bg-velmora-warm overflow-hidden"
          >
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-title] [brand-story-body] gold jewelry craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:py-8"
          >
            <p className="text-xs uppercase tracking-widest-2xl text-velmora-taupe mb-6">
              Our Philosophy
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-4xl md:text-5xl text-velmora-ink mb-8"
            >
              Jewelry That
              <br />
              <span className="italic">Tells a Story</span>
            </h2>
            <div className="space-y-5 text-velmora-brown leading-relaxed">
              <p id="brand-story-body">
                Velmora was born from a simple belief: fine jewelry should be
                accessible, not exclusive. Every piece in our collection is
                designed in-house and crafted in small batches using 18K
                gold-plated brass and responsibly sourced crystals.
              </p>
              <p>
                We create for the woman who wants to feel elevated every day —
                not just on special occasions. Demi-fine jewelry that bridges
                the gap between costume and fine, without the fine-jewelry
                price tag.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-10 text-xs uppercase tracking-widest text-velmora-ink hover:text-velmora-gold transition-colors group"
            >
              Our Story
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
