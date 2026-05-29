import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Ken Burns background */}
      <div
        className="absolute inset-0 animate-kenburns will-change-transform"
        data-strk-bg-id="hero-nebula-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Hero content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-nebula-light font-light">
            探索 · Explore the Cosmos
          </span>
        </motion.div>

        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-star-white leading-tight tracking-wide mb-6"
        >
          Celestial
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-nebula-light via-cosmic-cyan to-nebula-light">
            Odyssey
          </span>
        </motion.h1>

        <motion.p
          id="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-sans text-sm md:text-base text-star-dim font-light tracking-widest uppercase mb-12 max-w-lg mx-auto"
        >
          A journey through nebulae, galaxies, and the infinite void
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/gallery"
            className="group inline-flex items-center gap-3 px-8 py-3 border border-white/20 text-star-white font-sans text-xs uppercase tracking-[0.3em] hover:border-nebula-light hover:text-nebula-light transition-all duration-300"
          >
            <span>View Gallery</span>
            <span className="w-6 h-px bg-current transition-all duration-300 group-hover:w-10" />
          </a>
          <a
            href="/data"
            className="inline-flex items-center gap-3 px-8 py-3 text-star-dim font-sans text-xs uppercase tracking-[0.3em] hover:text-star-white transition-colors duration-300"
          >
            Data Sheets
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-sans text-[9px] uppercase tracking-[0.4em] text-star-dim">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-star-dim to-transparent" />
      </motion.div>
    </section>
  )
}
