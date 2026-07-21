import { Link } from 'react-router-dom'
import { categories } from '@/data/products'
import { useImageLoader } from '@/lib/useImageLoader'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function CategoryTiles() {
  const ref = useImageLoader([])

  return (
    <section ref={ref} className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">
            Explore
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${encodeURIComponent(cat.slug)}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-sand"
            >
              <img
                alt={cat.name}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry editorial`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src={PLACEHOLDER}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-center">
                <h3
                  id={cat.titleId}
                  className="font-serif text-cream text-3xl md:text-4xl"
                >
                  {cat.name}
                </h3>
                <p
                  id={cat.descId}
                  className="text-cream/80 text-xs mt-2 opacity-0 translate-y-2 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0"
                >
                  {cat.description}
                </p>
                <span className="inline-block mt-4 text-[10px] uppercase tracking-[0.2em] text-cream border-b border-cream/60 pb-1">
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
