import { Link } from 'react-router-dom'
import { categories } from '@/data/products'

export default function CategoryTiles() {
  return (
    <section className="bg-velmora-ivory py-16 text-velmora-espresso md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-9 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-velmora-champagne">Find your finish</p>
          <h2 id="category-title" className="mt-3 font-serif text-5xl font-medium leading-none text-velmora-espresso md:text-6xl">Shop by Category</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} to={`/shop?category=${category.name}`} className="group relative block overflow-hidden rounded-t-full bg-velmora-cocoa text-velmora-ivory shadow-soft">
              <div className="aspect-[4/5] overflow-hidden rounded-t-full">
                <img
                  alt={category.name}
                  src={category.image}
                  className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-70"
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-velmora-espresso/82 via-velmora-espresso/18 to-transparent p-6">
                <div className="translate-y-6 transition duration-500 group-hover:translate-y-0">
                  <h3 id={category.titleId} className="font-serif text-4xl text-velmora-ivory">{category.name}</h3>
                  <p id={category.descId} className="mt-2 max-w-xs text-sm leading-6 text-velmora-ivory/78 opacity-0 transition duration-500 group-hover:opacity-100">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
