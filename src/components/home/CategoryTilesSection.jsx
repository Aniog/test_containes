import { Link } from 'react-router-dom'
import { categories } from '../../lib/products'

export default function CategoryTilesSection() {
  return (
    <section id="collections" className="section-padding page-shell">
      <div className="max-w-2xl">
        <p className="eyebrow">Shop by category</p>
        <h2 id="category-grid-title" className="mt-4 editorial-heading">
          Thoughtfully curated silhouettes for every kind of glow
        </h2>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/shop?category=${encodeURIComponent(category.name)}`}
            className="group relative overflow-hidden rounded-[2rem] border border-sandDeep/70 bg-sand shadow-card"
          >
            <div className="sr-only">
              <h3 id={category.titleId}>{category.name}</h3>
              <p id={category.descId}>{category.description}</p>
            </div>
            <div
              className="aspect-[3/4] transition duration-500 ease-luxe group-hover:scale-105"
              data-strk-bg-id={category.bgId}
              data-strk-bg={`[${category.descId}] [${category.titleId}] [category-grid-title]`}
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="900"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent opacity-80 transition duration-300 group-hover:opacity-90" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between px-6 pb-6 text-white">
              <h3 className="font-display text-3xl">{category.name}</h3>
              <span className="text-xs uppercase tracking-widest text-white/70 transition group-hover:text-white">
                Shop now
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
