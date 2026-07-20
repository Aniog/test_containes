import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-zinc-900"
        data-strk-bg-id="home-hero-bg"
        data-strk-bg="[hero-title] close-up gold jewelry on model warm lighting"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 w-full max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-tight tracking-tight">
            Crafted to be <br className="hidden md:block" /> Treasured
          </h1>
          <p className="text-xs md:text-sm uppercase tracking-[0.4em] mb-12 opacity-90 max-w-xs mx-auto leading-loose">
            High-end demi-fine gold jewelry for the modern curator.
          </p>
          <Link 
            to="/shop"
            className="inline-block px-12 py-5 bg-white text-base text-xs uppercase tracking-[0.3em] font-medium hover:bg-accent hover:text-white transition-all duration-500 transform hover:scale-105"
          >
            Shop the Collection
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator - simple serif "Scroll" */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center space-y-4">
        <span className="text-[10px] uppercase tracking-widest-extra vertical-text">Scroll</span>
        <div className="h-10 w-px bg-white/20" />
      </div>
    </section>
  )
}

export default Hero
