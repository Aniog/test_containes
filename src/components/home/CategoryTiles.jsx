import { Link } from 'react-router-dom'
import { categories } from '../../data/products'

export default function CategoryTiles() {
  return (
    <section className="bg-velmora-ivory py-16 text-velmora-espresso md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">Curated by ritual</p>
          <h2 id="category-title" className="mt-3 font-serif text-5xl text-velmora-espresso md:text-6xl">Shop by Category</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.label} to={category.href} className="group relative block aspect-[4/5] overflow-hidden bg-velmora-sand text-velmora-ivory">
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={`category-${category.label.toLowerCase()}`}
                data-strk-bg={`[${category.descId}] [${category.titleId}] [category-title]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="900"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/82 via-velmora-espresso/15 to-transparent" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 translate-y-4 p-7 transition-transform duration-300 group-hover:translate-y-0">
                <p id={category.descId} className="mb-3 max-w-xs text-sm leading-6 text-velmora-ivory/78">
                  {category.description}
                </p>
                <h3 id={category.titleId} className="font-serif text-5xl leading-none text-velmora-ivory">{category.label}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
