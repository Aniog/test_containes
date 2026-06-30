import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://image.pollinations.ai/prompt/elegant%20gold%20jewelry%20on%20woman%20model%20warm%20light%20editorial%20closeup%20dark%20background?width=1600&height=1000&nologo=true)',
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-base/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs uppercase tracking-[0.2em] font-sans font-medium mb-4 text-white/80"
        >
          Demi-Fine Jewelry
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl max-w-3xl leading-[1.1] mb-6"
        >
          Crafted to be Treasured
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-sm md:text-base text-white/80 max-w-md mb-10 font-light"
        >
          Timeless 18K gold-plated pieces designed for everyday elegance and lasting moments.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
        >
          <Link
            to="/shop"
            className="inline-block bg-gold text-white px-10 py-4 text-xs uppercase tracking-[0.15em] font-medium hover:bg-gold-hover transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
