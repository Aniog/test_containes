import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="about" className="py-20 lg:py-28 bg-cream-100">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] overflow-hidden bg-charcoal-100"
          >
            <img
              data-strk-img-id="brand-story-img-2c9f7e"
              data-strk-img="[story-text] [story-heading]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting gold jewelry"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
          >
            <p className="text-caption uppercase tracking-[0.25em] text-gold-500 mb-4">
              Our Story
            </p>
            <h2 id="story-heading" className="heading-section text-charcoal-800 mb-6">
              Jewelry That Tells Your Story
            </h2>
            <div className="divider mb-8" />
            <p id="story-text" className="text-body-lg text-charcoal-500 mb-6 leading-relaxed">
              Velmora was born from a simple belief: every woman deserves jewelry that feels
              as special as the moments she wears it. We craft demi-fine pieces in 18K gold
              that bridge the gap between costume jewelry and fine jewelry — premium quality
              at an accessible price.
            </p>
            <p className="text-body text-charcoal-400 mb-8 leading-relaxed">
              Each piece is thoughtfully designed, ethically sourced, and built to last.
              From our studio to your jewelry box, we pour care into every detail — because
              the things we treasure deserve to be crafted with intention.
            </p>
            <Link
              to="/shop"
              className="btn-outline text-xs inline-flex"
            >
              Discover Our Collection
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
