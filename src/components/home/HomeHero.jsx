import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function HomeHero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="home-hero-bg"
        data-strk-bg="[hero-subtitle] [hero-title] jewelry model warm light"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          id="hero-subtitle"
          className="text-white text-[12px] uppercase tracking-[0.4em] mb-6"
        >
          Velmora Fine Jewelry
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          id="hero-title"
          className="text-white font-serif text-5xl md:text-7xl lg:text-8xl font-light mb-12 italic"
        >
          Crafted to be Treasured
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Link 
            to="/shop" 
            className="inline-block bg-white text-foreground px-12 py-5 text-[11px] uppercase tracking-[0.3em] font-semibold hover:bg-background transition-colors"
          >
            Shop the Collection
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
