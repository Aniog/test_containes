import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HomeFeaturedQuote() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const containerRef = useRef(null);

  useEffect(() => {
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    return cleanup;
  }, []);

  return (
    <section ref={containerRef} className="relative py-0 overflow-hidden">
      {/* Full-bleed background image */}
      <div className="relative h-[60vh] md:h-[70vh]">
        <div
          data-strk-bg-id="home-quote-bg-k1l2"
          data-strk-bg="[home-quote-bg-desc]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0 bg-cover bg-center"
          style={{ filter: 'saturate(0.7) brightness(0.55)' }}
        />
        <span id="home-quote-bg-desc" className="hidden">
          indigenous tribe elder forest canopy aerial landscape
        </span>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C2C2C]/20 via-transparent to-[#2C2C2C]/60" />

        {/* Quote */}
        <div
          ref={ref}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <p className="section-label text-white/60 mb-6">Featured Quote</p>
            <blockquote
              className="text-white text-3xl md:text-5xl max-w-3xl leading-snug"
              style={{ fontFamily: 'Caveat, cursive' }}
            >
              "The forest is not a resource. It is a relative."
            </blockquote>
            <p className="mt-6 text-white/60 text-sm tracking-widest uppercase">
              — Davi Kopenawa, Yanomami Shaman
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
