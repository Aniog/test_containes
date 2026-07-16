import { Link } from 'react-router-dom'
import { categories } from '@/data/products.js'

const CategoryTiles = () => {
  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-8 flex items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-bronze">Shop by category</p>
            <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">Jewelry for every kind of ritual</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              to={`/shop?category=${category.slug}`}
              className="group relative overflow-hidden rounded-[2rem] bg-ink"
            >
              <img
                alt={category.name}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id={category.imageId}
                data-strk-img={`[${category.descriptionId}] [${category.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                className="aspect-[4/5] h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-ivory">
                <h3 id={category.titleId} className="font-display text-4xl text-ivory">
                  {category.name}
                </h3>
                <p id={category.descriptionId} className="mt-2 max-w-sm text-sm leading-7 text-ivory/78 opacity-0 transition duration-300 group-hover:opacity-100">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryTiles
