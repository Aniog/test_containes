import { motion } from 'framer-motion'
import { products } from '@/data/products'
import { ProductCard } from '@/components/product/ProductCard'
import { SectionHeader } from './SectionHeader'

export function BestsellersSection() {
  return (
    <section className="bg-velmora-light py-16 md:py-24">
      <div className="container-velmora">
        <SectionHeader title="Bestsellers" link={{ label: 'Shop All', href: '/shop' }} />
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 md:gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
