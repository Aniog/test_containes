import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { products } from '@/data/products'
import { ProductCard } from '@/components/product/ProductCard'

export function BestsellersSection() {
  const containerRef = useRef(null)
  const bestsellers = products.filter((p) => p.isBestseller)

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-deep"
          >
            Bestsellers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-velmora-taupe text-sm md:text-base max-w-md mx-auto"
          >
            Our most-loved pieces, chosen for their effortless versatility.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <ProductCard product={product} containerRef={containerRef} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
