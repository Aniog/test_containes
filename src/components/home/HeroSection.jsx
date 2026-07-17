import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-[100dvh] min-h-[600px] w-full overflow-hidden bg-velmora-base">
      {/* Background placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2a2420] via-[#1a1612] to-[#0f0c0a]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-velmora-gold/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-velmora-gold text-xs md:text-sm tracking-ultra uppercase mb-6"
        >
          Demi-Fine Jewelry
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white max-w-3xl leading-tight"
        >
          Crafted to be
          <br />
          <span className="italic font-light">Treasured</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-velmora-muted text-sm md:text-base mt-6 max-w-md leading-relaxed"
        >
          18K gold-plated pieces designed for everyday elegance. Timeless, hypoallergenic, and made to last.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10"
        >
          <Link
            to="/shop"
            className="inline-block px-10 py-4 bg-velmora-gold text-velmora-base text-sm tracking-widest uppercase hover:bg-velmora-goldLight transition-colors"
          >
            Shop the Collection
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-ultra uppercase text-velmora-muted">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-velmora-gold to-transparent" />
      </motion.div>
    </section>
  );
}
