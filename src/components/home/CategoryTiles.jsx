import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28 bg-base">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-14">
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-sans mb-3">
            Browse
          </p>
          <h2 className="font-serif text-cream text-[clamp(1.75rem,3vw,2.5rem)]">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Link to={`/shop?category=${cat.id}`} className="group block relative aspect-[4/5] overflow-hidden bg-elevated">
                <img
                  data-strk-img-id={`category-${cat.id}`}
                  data-strk-img={`[category-name-${cat.id}] gold jewelry ${cat.id} dark background elegant`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500 flex items-center justify-center">
                  <h3
                    id={`category-name-${cat.id}`}
                    className="text-cream font-serif text-2xl md:text-3xl tracking-wide"
                  >
                    {cat.name}
                  </h3>
                </div>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
