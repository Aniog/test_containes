import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      <div
        data-strk-bg-id="hero-velmora-main"
        data-strk-bg="[hero-title] [hero-subtitle] gold jewelry on model warm editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-velmora-deep"
      >
        <div className="absolute inset-0 bg-velmora-deep/30" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-velmora-cream/80 uppercase tracking-widest-xl text-xs md:text-sm mb-4"
        >
          Demi-Fine Gold Jewelry
        </motion.p>
        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-velmora-cream max-w-4xl leading-[1.1]"
        >
          Crafted to be Treasured
        </motion.h1>
        <motion.p
          id="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 text-velmora-cream/90 text-base md:text-lg max-w-xl font-light"
        >
          Timeless 18k gold-plated pieces designed for everyday luxury and moments worth remembering.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-10"
        >
          <Link
            to="/shop"
            className="inline-block bg-velmora-gold text-white px-10 py-4 uppercase text-xs tracking-widest-xl font-medium hover:bg-velmora-gold-dark transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
