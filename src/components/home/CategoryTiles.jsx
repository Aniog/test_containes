import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { categories } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export function CategoryTiles() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

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
            Shop by Category
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/shop?category=${category.id}`}
                className="group relative block aspect-[4/5] overflow-hidden bg-velmora-hairline/30"
              >
                <img
                  data-strk-img-id={`category-${category.id}`}
                  data-strk-img={`[category-title-${category.id}] gold ${category.id} jewelry editorial warm`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width={700}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-velmora-deep/20 group-hover:bg-velmora-deep/30 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3
                    id={`category-title-${category.id}`}
                    className="font-serif text-3xl md:text-4xl text-velmora-cream opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    {category.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
