import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="[hero-title] [hero-subtitle] gold jewelry on model warm light editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/80 text-xs md:text-sm tracking-[0.3em] uppercase mb-4"
        >
          Demi-Fine Jewelry
        </motion.p>
        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light tracking-wide max-w-4xl"
        >
          Crafted to be Treasured
        </motion.h1>
        <motion.p
          id="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-4 text-white/80 text-sm md:text-base max-w-lg leading-relaxed"
        >
          18K gold-plated pieces designed for everyday elegance. Free shipping worldwide.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8"
        >
          <Link
            to="/shop"
            className="inline-block bg-gold-500 text-white px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-medium rounded-sm hover:bg-gold-600 transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
