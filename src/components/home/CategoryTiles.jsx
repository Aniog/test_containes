import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { StockBg } from '@/components/ui/StockImg'

const tiles = [
  {
    id: 'cat-earrings',
    label: 'Earrings',
    query: 'gold earrings on dark background editorial demi fine jewelry',
  },
  {
    id: 'cat-necklaces',
    label: 'Necklaces',
    query: 'gold necklace on dark background editorial demi fine jewelry',
  },
  {
    id: 'cat-huggies',
    label: 'Huggies',
    query: 'gold huggie earrings on dark background editorial jewelry',
  },
]

export function CategoryTiles() {
  return (
    <section className="bg-velmora-light py-16 md:py-24">
      <div className="container-velmora">
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {tiles.map((tile, index) => (
            <motion.div
              key={tile.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to="/shop" className="group relative block aspect-[3/4] overflow-hidden bg-stone-200 md:aspect-[4/5]">
                <StockBg
                  id={tile.id}
                  query={tile.query}
                  ratio="3x4"
                  width={700}
                  className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="translate-y-4 transform font-serif text-3xl text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:text-4xl">
                    {tile.label}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
