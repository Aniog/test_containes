import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories } from '@/data/products';

export default function CategoriesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-velmora">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-velmora-gold text-xs tracking-ultra uppercase mb-3">Explore</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-base">Shop by Category</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to="/shop"
                className="group relative block aspect-[4/5] overflow-hidden bg-velmora-surfaceAlt"
              >
                {/* Placeholder image */}
                <div className="absolute inset-0 bg-gradient-to-br from-velmora-warm to-velmora-cream transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-velmora-gold/15 group-hover:bg-velmora-gold/25 transition-colors duration-500" />
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

                {/* Label */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="font-serif text-2xl md:text-3xl text-velmora-base group-hover:text-white transition-colors duration-500">
                      {cat.label}
                    </h3>
                    <p className="text-xs text-velmora-stone group-hover:text-white/80 transition-colors duration-500 mt-2 tracking-wide">
                      {cat.count} pieces
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
