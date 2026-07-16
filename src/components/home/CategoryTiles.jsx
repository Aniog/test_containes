import { Link } from 'react-router-dom'
import { categories } from '@/data/products'


export default function CategoryTiles() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="flex flex-col items-center text-center">
        <p className="text-[11px] uppercase tracking-widest2 text-gold">Explore</p>
        <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Shop by Category</h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.name}`}
            className="group relative aspect-[4/5] overflow-hidden bg-cream md:aspect-[3/4]"
          >
            <img
              alt={cat.name}
              data-strk-img-id={cat.imgId}
              data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry editorial warm`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-center">
              <h3
                id={cat.titleId}
                className="font-serif text-2xl uppercase tracking-wide2 text-ivory md:text-3xl"
              >
                {cat.name}
              </h3>
              <p
                id={cat.descId}
                className="mt-1.5 translate-y-2 text-xs text-ivory/0 transition-all duration-500 group-hover:translate-y-0 group-hover:text-ivory/80"
              >
                {cat.desc}
              </p>
              <span className="mt-4 inline-block text-[10px] uppercase tracking-wide2 text-ivory/0 transition-all duration-500 group-hover:text-champagne">
                Shop Now
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
