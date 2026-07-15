import { Link } from 'react-router-dom'
import { categories } from '@/data/products'

export default function CategoryTiles() {
  return (
    <section className="bg-velmora-parchment px-5 py-16 text-velmora-ink md:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-brass">Shop by category</p>
          <h2 id="category-section-title" className="mt-3 font-serif text-5xl font-semibold text-velmora-ink md:text-6xl">Find Your Signature</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.name} to={`/shop?category=${category.name}`} className="group relative block overflow-hidden bg-velmora-ink text-velmora-cream shadow-soft focus:outline-none focus:ring-2 focus:ring-velmora-champagne">
              <img
                alt={`${category.name} jewelry`}
                className="aspect-[4/5] w-full object-cover opacity-82 transition duration-700 group-hover:scale-105 group-hover:opacity-55"
                data-strk-img-id={category.imgId}
                data-strk-img={`[${category.id}-desc] [${category.id}-title] [category-section-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/80 via-velmora-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 transition duration-300 md:translate-y-8 md:group-hover:translate-y-0">
                <h3 id={`${category.id}-title`} className="font-serif text-4xl font-semibold text-velmora-cream">{category.name}</h3>
                <p id={`${category.id}-desc`} className="mt-2 text-sm leading-6 text-velmora-cream/78 opacity-100 md:opacity-0 md:transition md:duration-300 md:group-hover:opacity-100">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
