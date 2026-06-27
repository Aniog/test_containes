import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-[500px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1600&q=80')" }}
      />
      <div className="absolute inset-0 bg-charcoal/35" />
      <div className="relative h-full flex flex-col items-center justify-center text-center text-cream px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs md:text-sm font-medium uppercase tracking-[0.3em] mb-4"
        >
          Demi-Fine Gold Jewelry
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="serif text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] max-w-3xl"
        >
          Crafted to be Treasured
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-5 text-sm md:text-base text-cream/80 max-w-md leading-relaxed"
        >
          Elegant pieces designed for everyday moments and special occasions alike.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8"
        >
          <Link
            to="/shop"
            className="inline-block bg-accent text-cream text-xs font-semibold uppercase tracking-[0.2em] px-8 py-4 hover:bg-accent-hover transition-colors"
          >
            Shop the Collection
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
