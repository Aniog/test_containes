import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[560px] md:min-h-[700px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1600&q=80"
          alt="Velmora Fine Jewelry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-5">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/90 text-xs md:text-sm tracking-ultra uppercase font-medium mb-5"
          >
            Demi-Fine Gold Jewelry
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6"
          >
            Crafted to be
            <br />
            <span className="italic font-normal">Treasured</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-white/85 text-sm md:text-base leading-relaxed mb-8 max-w-md mx-auto"
          >
            Timeless designs in 18K gold plate. Made for everyday luxury and the moments that matter.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <Link
              to="/shop"
              className="inline-block bg-velmora-gold text-white text-xs md:text-sm font-medium tracking-widest uppercase px-8 md:px-10 py-3.5 md:py-4 hover:bg-velmora-goldDark transition-colors"
            >
              Shop the Collection
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
