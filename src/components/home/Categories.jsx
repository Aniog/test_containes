import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const categoryTiles = [
  {
    id: 'earrings',
    name: 'Earrings',
    to: '/shop?category=earrings',
    searchTerms: 'gold earrings collection editorial',
    ratio: '3x4',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    to: '/shop?category=necklaces',
    searchTerms: 'gold necklace collection editorial',
    ratio: '3x4',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    to: '/shop?category=huggies',
    searchTerms: 'gold huggie earrings collection editorial',
    ratio: '3x4',
  },
];

export default function Categories() {
  return (
    <section className="py-16 lg:py-24 bg-ivory">
      <div className="container-wide section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="section-subtitle mb-3">Browse</p>
          <h2 className="section-title">Shop by Category</h2>
          <div className="w-16 h-px bg-gold mx-auto mt-4" />
        </motion.div>

        {/* Category tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
          {categoryTiles.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Link
                to={cat.to}
                className="group relative block aspect-[3/4] rounded-sm overflow-hidden"
              >
                {/* Image */}
                <img
                  data-strk-img-id={`category-${cat.id}`}
                  data-strk-img={cat.searchTerms}
                  data-strk-img-ratio={cat.ratio}
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'%3E%3C/svg%3E"
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-500" />

                {/* Label */}
                <div className="absolute inset-0 flex items-end justify-center pb-8 lg:pb-12">
                  <div className="text-center">
                    <h3 className="font-serif text-2xl lg:text-3xl text-white mb-2">
                      {cat.name}
                    </h3>
                    <span className="font-sans text-xs tracking-ultra-wide uppercase text-white/70 
                                   border-b border-white/40 pb-0.5 group-hover:border-gold group-hover:text-gold transition-colors duration-300">
                      Explore
                    </span>
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
