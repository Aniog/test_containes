import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://placehold.co/1600x1000/1C1917/C5A059?text=Velmora+Hero')",
        }}
      >
        <div className="absolute inset-0 bg-base/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 text-xs md:text-sm font-sans tracking-[0.2em] uppercase mb-4"
          >
            Demi-Fine Gold Jewelry
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6"
          >
            Crafted to be
            <br />
            Treasured
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-white/70 text-sm md:text-base font-sans mb-8 max-w-md mx-auto"
          >
            Timeless pieces designed for everyday elegance. 18K gold-plated, hypoallergenic, made to last.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link
              to="/shop"
              className="inline-block bg-gold text-white px-8 py-4 text-sm font-sans font-medium tracking-wide uppercase hover:bg-gold-hover transition-colors"
            >
              Shop the Collection
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/50 text-[10px] tracking-widest uppercase font-sans">
          Scroll
        </span>
        <div className="w-px h-6 bg-white/30" />
      </div>
    </section>
  );
}
