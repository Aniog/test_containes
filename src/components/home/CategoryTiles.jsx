import { Link } from 'react-router-dom'
import { categories } from '@/data/products'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function CategoryTiles() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="mb-12 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-velmora-gold">
          Explore
        </p>
        <h2 className="mt-3 font-serif text-4xl text-velmora-ink md:text-5xl">
          Shop by Category
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.name}`}
            className="group relative aspect-[4/5] overflow-hidden bg-velmora-sand"
          >
            <img
              data-strk-img-id={cat.imgId}
              data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="700"
              src={PLACEHOLDER}
              alt={cat.name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/70 via-velmora-ink/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-center">
              <h3
                id={cat.titleId}
                className="font-serif text-3xl text-velmora-cream"
              >
                {cat.name}
              </h3>
              <p id={cat.descId} className="sr-only">
                {cat.blurb}
              </p>
              <span className="mt-2 inline-block text-[10px] uppercase tracking-[0.25em] text-velmora-cream/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Shop Now
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
