import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://placehold.co/1920x1080/2a1f1a/d4b87a?text=Velmora+Hero+Jewelry+On+Model')`,
        }}
      >
        <div className="absolute inset-0 bg-charcoal/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs tracking-ultra uppercase text-gold-light mb-5"
        >
          New Collection
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light leading-tight max-w-3xl"
        >
          Crafted to be
          <br />
          <span className="italic">Treasured</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-5 text-sm md:text-base text-white/80 max-w-md leading-relaxed"
        >
          Demi-fine jewelry designed for everyday luxury. Timeless pieces,
          modern sensibility.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8"
        >
          <Link
            to="/collection"
            className="inline-block px-8 py-3.5 bg-gold text-white text-xs tracking-widest uppercase font-medium hover:bg-gold-dark transition-colors"
          >
            Shop the Collection
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-5 h-8 border border-white/40 rounded-full flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
