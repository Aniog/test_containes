import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[92vh] min-h-[600px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={`https://image.pollinations.ai/prompt/${encodeURIComponent('warm lit close up gold jewelry on woman model ear neck editorial photography dark background luxury demi fine jewelry')}?width=1600&height=1000&nologo=true&seed=velmora-hero`}
          alt="Velmora Fine Jewelry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4 font-medium"
        >
          Demi-Fine Gold Jewelry
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl max-w-4xl leading-[1.1] mb-6"
        >
          Crafted to be Treasured
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="text-sm md:text-base text-white/80 max-w-md mb-10 font-light leading-relaxed"
        >
          Timeless pieces designed for the modern woman. 18K gold plating, hypoallergenic, and made to last.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
        >
          <Link
            to="/shop"
            className="inline-block bg-[var(--gold)] text-white px-10 py-3.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[var(--gold-dark)] transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-px h-12 bg-white/40 animate-pulse" />
      </motion.div>
    </section>
  );
}
