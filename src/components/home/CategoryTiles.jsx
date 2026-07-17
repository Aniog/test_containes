import { Link } from 'react-router-dom'
import { CATEGORIES } from '@/data/products'
import SectionHeading from '@/components/ui/SectionHeading'

export default function CategoryTiles() {
  return (
    <section className="bg-velmora-surface py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Shop by Category" />
        <div className="grid gap-4 md:grid-cols-3">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-stone-100 md:aspect-[4/5]"
            >
              <img
                src={category.image}
                alt={category.label}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="translate-y-4 font-serif text-2xl font-medium uppercase tracking-[0.2em] text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:text-3xl">
                  {category.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
