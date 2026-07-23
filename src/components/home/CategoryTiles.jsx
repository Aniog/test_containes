import { Link } from 'react-router-dom'
import { categories } from '../../data/products.js'
import SectionHeading from './SectionHeading.jsx'

export default function CategoryTiles() {
  return (
    <section className="bg-velmora-cream px-5 py-20 text-velmora-ink lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading idPrefix="category" eyebrow="Shop by category" title="Curated for every kind of glow" />
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => {
            const titleId = `category-${category.id}-title`
            const descId = `category-${category.id}-desc`
            return (
              <Link key={category.id} to={`/shop?category=${category.name}`} className="group relative aspect-[4/5] overflow-hidden bg-velmora-sand text-velmora-pearl shadow-card">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  data-strk-bg-id={`category-${category.id}-bg-9a4`}
                  data-strk-bg={`[${descId}] [${titleId}] [category-title]`}
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="900"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/82 via-velmora-ink/10 to-transparent" />
                <div className="absolute inset-x-6 bottom-6 translate-y-2 transition duration-300 group-hover:translate-y-0">
                  <p id={descId} className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-velmora-sand opacity-0 transition duration-300 group-hover:opacity-100">{category.description}</p>
                  <h3 id={titleId} className="font-serif text-4xl font-semibold text-velmora-pearl">{category.name}</h3>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
