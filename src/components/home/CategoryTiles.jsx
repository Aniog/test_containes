import { Link } from 'react-router-dom'
import { categories } from '@/data/products'
import { resolveImageUrl } from '@/lib/resolveImage'

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Explore</p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.name}`}
              className="group relative overflow-hidden aspect-[4x5] bg-sand"
            >
              <img
                alt={cat.name}
                src={resolveImageUrl(cat.imgId)}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 text-center">
                <h3
                  id={cat.titleId}
                  className="font-serif text-3xl text-ivory uppercase tracking-[0.15em] translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
                >
                  {cat.name}
                </h3>
                <p
                  id={cat.descId}
                  className="text-xs text-ivory/80 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75"
                >
                  {cat.description}
                </p>
                <span className="mt-4 text-[11px] uppercase tracking-[0.25em] text-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
