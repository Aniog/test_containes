import { Link } from 'react-router-dom'
import JewelryVisual from '@/components/product/JewelryVisual'
import { getProductById } from '@/data/products'

const categories = [
  { id: 'earrings', label: 'Earrings', copy: 'Sculptural shine for daily rituals', productId: 'amber-lace-earrings' },
  { id: 'necklaces', label: 'Necklaces', copy: 'Delicate layers and crystal-soft light', productId: 'majestic-flora-nectar' },
  { id: 'huggies', label: 'Huggies', copy: 'Easy polish with a rounded glow', productId: 'golden-sphere-huggies' },
]

export default function CategoryTiles() {
  return (
    <section className="bg-velmora-ivory px-5 py-16 text-velmora-ink md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-luxury text-velmora-gold">Shop by category</p>
            <h2 className="font-serif text-4xl leading-tight text-velmora-ink md:text-6xl">Find your signature shine</h2>
          </div>
          <Link to="/shop" className="text-xs font-bold uppercase tracking-luxury text-velmora-ink underline decoration-velmora-gold underline-offset-8 transition hover:text-velmora-gold">
            View all jewelry
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => {
            const titleId = `category-${category.id}-title`
            const copyId = `category-${category.id}-copy`
            return (
              <Link key={category.id} to={`/shop?category=${category.label}`} className="group relative aspect-[4/5] overflow-hidden bg-velmora-espresso text-velmora-ivory">
                <JewelryVisual product={getProductById(category.productId)} variant="worn" className="absolute inset-0 transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/80 via-velmora-espresso/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 translate-y-4 p-7 transition duration-500 group-hover:translate-y-0">
                  <h3 id={titleId} className="font-serif text-4xl text-velmora-ivory">{category.label}</h3>
                  <p id={copyId} className="mt-3 max-h-0 overflow-hidden text-sm leading-6 text-velmora-sand opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100">
                    {category.copy}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
