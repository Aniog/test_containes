import { Link } from 'react-router-dom'
import { categories } from '@/data/products'

export default function CategoryTiles() {
  return (
    <section id="collections" className="bg-velmora-porcelain py-16 text-velmora-espresso sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-bronze">Explore the edit</p>
          <h2 className="mt-3 font-serif text-4xl text-velmora-espresso sm:text-5xl">Shop by Category</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${encodeURIComponent(category.name)}`}
              className="group relative block aspect-[4/5] overflow-hidden bg-velmora-cacao text-velmora-porcelain"
            >
              <img
                alt={`${category.name} jewelry category`}
                className="h-full w-full object-cover opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-70"
                data-strk-img-id={category.imgId}
                data-strk-img={`[${category.descId}] [${category.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="850"
                loading="lazy"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/85 via-velmora-espresso/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p id={category.descId} className="mb-3 max-w-xs translate-y-4 text-sm leading-6 text-velmora-sand opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {category.description}
                </p>
                <h3 id={category.titleId} className="font-serif text-4xl text-velmora-porcelain">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
