import { Link } from 'react-router-dom'
import { categories } from '@/data/products'

export default function CategoryTiles() {
  return (
    <section className="bg-velmora-ivory py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-velmora-rust">
            Shop by Category
          </p>
          <h2 className="mt-2 font-serif text-3xl font-medium text-velmora-ink md:text-4xl">
            Find Your Finish
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-velmora-stone md:aspect-[4/5]"
            >
              <img
                id={`category-${category.id}`}
                data-strk-img-id={`category-${category.id}`}
                data-strk-img={`[category-label-${category.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={category.label}
                className="h-full w-full object-cover transition-transform duration-700 ease-lux group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-velmora-ink/20 transition group-hover:bg-velmora-ink/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`category-label-${category.id}`}
                  className="font-serif text-2xl font-medium uppercase tracking-[0.2em] text-velmora-ivory md:text-3xl"
                >
                  {category.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
