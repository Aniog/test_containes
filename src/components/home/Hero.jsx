import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1600&h=1000&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase mb-4 md:mb-6"
        >
          Demi-Fine Gold Jewelry
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl font-light leading-[1.1] max-w-3xl"
        >
          Crafted to be Treasured
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-5 md:mt-6 text-sm md:text-base text-white/80 max-w-md leading-relaxed"
        >
          Timeless pieces designed for the modern woman. Ethically made, affordably luxurious.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <Link
            to="/shop"
            className="mt-8 md:mt-10 inline-block bg-white text-ink-950 px-8 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-ink-100 transition-colors rounded-sm"
          >
            Shop the Collection
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
