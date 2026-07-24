import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="velmora-hero-bg-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/30 via-charcoal-900/20 to-charcoal-900/50" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-2xl"
        >
          <p id="hero-title" className="text-caption uppercase tracking-[0.25em] text-gold-300 mb-4">
            New Collection 2026
          </p>
          <h1 className="heading-display text-cream-50 mb-6">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="text-body-lg text-cream-200/90 max-w-lg mx-auto mb-8 font-light">
            Discover demi-fine jewelry that tells your story. Handcrafted in 18K gold,
            designed for the moments that matter.
          </p>
          <Link to="/shop" className="btn-gold">
            Shop the Collection
          </Link>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream-50 to-transparent" />
    </section>
  );
}
