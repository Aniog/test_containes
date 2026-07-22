import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const categories = [
  { name: 'Earrings', slug: 'earrings', count: '24 pieces' },
  { name: 'Necklaces', slug: 'necklaces', count: '18 pieces' },
  { name: 'Huggies', slug: 'huggies', count: '12 pieces' },
];

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-warm-gold text-xs tracking-[0.2em] uppercase font-medium mb-3">
            Browse
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
            Shop by Category
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={`/shop?category=${cat.slug}`}
                className="group relative block aspect-[4/5] bg-sand overflow-hidden"
              >
                {/* Placeholder center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs text-stone uppercase tracking-widest">{cat.name}</span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-500" />

                {/* Label */}
                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-white/95 backdrop-blur-sm px-6 py-4 text-center">
                    <h3 className="font-serif text-lg tracking-wide text-charcoal">{cat.name}</h3>
                    <p className="text-xs text-stone mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {cat.count}
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
