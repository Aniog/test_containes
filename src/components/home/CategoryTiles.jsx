import { Link } from 'react-router-dom'
import { categories } from '@/data/products'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function CategoryTiles() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28 lg:px-16">
      <div className="mb-12 flex flex-col items-center text-center">
        <p className="text-[11px] uppercase tracking-widest3 text-gold">Explore</p>
        <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
        {categories.map((cat) => {
          const nameId = `cat-name-${cat.id}`
          const descId = `cat-desc-${cat.id}`
          return (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.name}`}
              className="group relative aspect-[4x5] overflow-hidden bg-cream-deep md:aspect-[3x4]"
            >
              <img
                alt={cat.name}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${descId}] [${nameId}] gold jewelry editorial`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
                className="h-full w-full object-cover transition-transform duration-700 ease-elegant group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-center">
                <h3
                  id={nameId}
                  className="font-serif text-2xl uppercase tracking-widest2 text-cream-soft transition-transform duration-300 group-hover:-translate-y-1"
                >
                  {cat.name}
                </h3>
                <p
                  id={descId}
                  className="mt-2 max-w-[16rem] mx-auto text-xs text-cream-soft/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  {cat.description}
                </p>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
