import { Link } from 'react-router-dom'
import { categories } from '@/data/products'
import { useStrkImages } from '@/lib/useStrkImages'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function CategoryTiles() {
  const ref = useStrkImages([])

  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-gold-deep">Explore</p>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Shop by Category</h2>
        </div>

        <div ref={ref} className="grid gap-5 md:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-cream-deep md:aspect-[3/4]"
            >
              <img
                src={PLACEHOLDER}
                alt={cat.name}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}] warm gold jewelry editorial`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-center">
                <h3
                  id={cat.titleId}
                  className="font-serif text-3xl text-cream"
                >
                  {cat.name}
                </h3>
                <p
                  id={cat.descId}
                  className="mt-1 translate-y-2 text-sm text-cream/80 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  {cat.desc}
                </p>
                <span className="mt-3 inline-block text-[11px] uppercase tracking-wide2 text-gold-soft">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
