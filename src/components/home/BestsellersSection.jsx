import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { motion } from 'framer-motion';

export default function BestsellersSection() {
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
          <p className="text-velmora-gold text-xs tracking-ultra uppercase mb-3">Most Loved</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-base">Bestsellers</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
