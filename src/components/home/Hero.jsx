import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-velmora-dark">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1920&q=80)',
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs font-medium tracking-[0.3em] uppercase text-white/80 mb-4"
        >
          Demi-Fine Jewelry
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] max-w-4xl"
        >
          Crafted to be Treasured
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 max-w-md text-sm md:text-base text-white/80 font-light leading-relaxed"
        >
          Timeless 18K gold-plated pieces designed for the modern woman — elegant, wearable, and made to last.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10"
        >
          <Link
            to="/shop"
            className="inline-block bg-velmora-accent px-8 py-3 text-sm font-medium tracking-widest text-white hover:bg-white hover:text-velmora-dark transition-colors duration-300"
          >
            SHOP THE COLLECTION
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
