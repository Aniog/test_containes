import { Link } from 'react-router-dom'
import { useStrkImages, STRK_PLACEHOLDER } from '@/lib/useStrkImages'
import { categories } from '@/data/products'

export default function CategoryTiles() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="mb-12 text-center">
        <p className="text-[11px] uppercase tracking-widest2 text-gold">Explore</p>
        <h2 className="mt-3 font-serif text-3xl text-ink md:text-5xl">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.slug}`}
            className="group relative aspect-[4/5] overflow-hidden bg-cream md:aspect-[3/4]"
          >
            <img
              alt={cat.name}
              data-strk-img-id={cat.imgId}
              data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
              src={STRK_PLACEHOLDER}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-center">
              <h3
                id={cat.titleId}
                className="font-serif text-2xl text-ivory md:text-3xl"
              >
                {cat.name}
              </h3>
              <p id={cat.descId} className="sr-only">
                {cat.tagline}
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-widest2 text-ivory/80">
                {cat.tagline}
              </p>
              <span className="mt-4 inline-block translate-y-2 border-b border-ivory/60 pb-1 text-[10px] uppercase tracking-widest2 text-ivory opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                Shop Now
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
