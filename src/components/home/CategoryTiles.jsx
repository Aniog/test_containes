import { Link } from 'react-router-dom'
import { categories } from '@/data/products'

export default function CategoryTiles() {
  return (
    <section className="bg-velmora-porcelain px-4 py-20 text-velmora-espresso sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">Shop by Category</p>
          <h2 id="category-title" className="mt-3 font-serif text-5xl text-velmora-espresso sm:text-6xl">Find your signature shine</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} to={`/shop?category=${category.label}`} className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-velmora-espresso text-velmora-pearl shadow-velmora-card">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-65"
                data-strk-bg-id={`category-${category.id}`}
                data-strk-bg={`[category-${category.id}-desc] [category-${category.id}-label] [category-title]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/85 via-velmora-espresso/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p id={`category-${category.id}-label`} className="font-serif text-4xl text-velmora-pearl">{category.label}</p>
                <p id={`category-${category.id}-desc`} className="mt-2 text-sm leading-6 text-velmora-porcelain/80">{category.description}</p>
                <span className="mt-5 inline-block translate-y-2 border-b border-velmora-champagne pb-1 text-xs font-bold uppercase tracking-[0.24em] text-velmora-champagne opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
