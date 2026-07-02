import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image with stock system */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="hero-bg-velmora-001"
        data-strk-bg="[hero-title] [hero-subtitle] gold jewelry woman model"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundImage: 'linear-gradient(to bottom, rgba(15,15,15,0.3), rgba(15,15,15,0.7))' }}
      />

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-base/40 via-base/20 to-base/80" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[11px] uppercase tracking-[0.25em] text-gold font-sans mb-6"
        >
          Demi-Fine Jewelry
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          id="hero-title"
          className="font-serif text-cream text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] max-w-3xl"
        >
          Crafted to be Treasured
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          id="hero-subtitle"
          className="text-muted font-sans text-sm md:text-base mt-6 max-w-md leading-relaxed"
        >
          Timeless gold pieces designed for everyday elegance and lasting moments
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10"
        >
          <Link
            to="/shop"
            className="inline-block bg-gold hover:bg-gold-hover text-base font-sans text-xs font-medium uppercase tracking-[0.2em] px-10 py-4 transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-cream/40 to-transparent mx-auto" />
      </motion.div>
    </section>
  );
}
