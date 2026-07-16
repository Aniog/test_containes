import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '@/lib/products';
import ProductCard from '@/components/product/ProductCard';

export default function Bestsellers() {
  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="container-wide section-padding">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="section-subtitle mb-3">Curated Selection</p>
          <h2 className="section-title">Bestsellers</h2>
          <div className="w-16 h-px bg-gold mx-auto mt-4" />
        </motion.div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/shop" className="btn-outline">
            View All Jewelry
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
