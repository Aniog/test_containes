import { categories } from '@/data/products'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from './SectionHeader'

export default function CategoryTiles() {
  return (
    <section className="bg-velmora-ivory px-5 py-16 text-velmora-espresso md:px-8 md:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Shop by category" title="Find Your Signature" />
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} to={`/shop?category=${category.label}`} className="velmora-focus group relative aspect-[4/5] overflow-hidden bg-velmora-espresso text-velmora-ivory shadow-soft">
              <img
                alt={`${category.label} category`}
                className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-95"
                data-strk-img-id={`category-tile-${category.id}`}
                data-strk-img={`[${category.descId}] [${category.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/80 via-velmora-espresso/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 translate-y-3 p-6 transition duration-300 group-hover:translate-y-0">
                <p id={category.descId} className="mb-3 max-w-xs text-sm leading-6 text-velmora-parchment opacity-0 transition duration-300 group-hover:opacity-100">{category.description}</p>
                <div className="flex items-end justify-between gap-4">
                  <h3 id={category.titleId} className="font-serif text-5xl font-semibold text-velmora-ivory">{category.label}</h3>
                  <ArrowUpRight className="h-6 w-6 text-velmora-gold" aria-hidden="true" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
