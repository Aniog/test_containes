import { Link } from 'react-router-dom'
import { categories } from '@/data/products'
import { resolveStrkImageUrl } from '@/lib/strk-image'

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-4xl md:text-5xl">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.name}`}
              className="group relative overflow-hidden aspect-[4/5] md:aspect-[3/4] block"
            >
              <img
                alt={cat.name}
                src={resolveStrkImageUrl(cat.imgId)}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/25 group-hover:bg-ink/35 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-cream text-center px-4">
                <h3
                  id={cat.titleId}
                  className="font-serif text-3xl md:text-4xl uppercase tracking-[0.16em] translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
                >
                  {cat.name}
                </h3>
                <p
                  id={cat.descId}
                  className="text-xs uppercase tracking-[0.2em] text-cream/80 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  Shop Now
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
