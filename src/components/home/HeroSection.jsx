import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { StockBg } from '@/components/ui/StockImg'

export function HeroSection() {
  return (
    <section className="relative h-[100svh] min-h-[600px]">
      <StockBg
        id="hero-bg"
        query="warm lit gold jewelry on model close up editorial demi fine"
        ratio="9x16"
        width={1600}
        className="absolute inset-0 h-full w-full bg-stone-900"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      </StockBg>

      <div className="relative flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-white/80"
        >
          Demi-Fine Gold Jewelry
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="max-w-4xl font-serif text-5xl font-light leading-[1.05] md:text-7xl lg:text-8xl"
        >
          Crafted to be Treasured
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 max-w-lg text-base font-light leading-relaxed text-white/85 md:text-lg"
        >
          Earrings, necklaces, and huggies designed for everyday luxury and moments worth remembering.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10"
        >
          <Link to="/shop" className="btn-primary">
            Shop the Collection
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
