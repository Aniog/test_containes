import { Link } from 'react-router-dom'
import { CATEGORIES } from '@/data/products'

export default function Collections() {
  return (
    <div className="animate-fade-in pb-24 pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-velmora-accent">
            Curated Edits
          </p>
          <h1 className="font-serif text-4xl font-medium text-velmora-base md:text-5xl">
            Collections
          </h1>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-stone-100"
            >
              <img
                src={category.image}
                alt={category.label}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/35" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-2xl font-medium uppercase tracking-[0.2em] text-white md:text-3xl">
                  {category.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
