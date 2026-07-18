import { Link } from 'react-router-dom'
import { categories } from '@/data/products'

const CategoryTiles = () => {
  return (
    <section className="bg-velmora-cream px-4 py-16 text-velmora-ink sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-bronze">Shop by category</p>
          <h2 id="category-title" className="mt-3 font-serif text-5xl font-medium leading-none text-velmora-ink md:text-6xl">Find your signature</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} to={`/shop?category=${category.label}`} className="group relative aspect-[4/5] overflow-hidden bg-velmora-parchment text-velmora-cream shadow-sm">
              <img
                alt={category.label}
                data-strk-img-id={category.imgId}
                data-strk-img={`[${category.descId}] [${category.titleId}] [category-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="850"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/78 via-velmora-ink/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 translate-y-4 p-7 transition duration-500 group-hover:translate-y-0">
                <h3 id={category.titleId} className="font-serif text-4xl font-semibold text-velmora-cream">{category.label}</h3>
                <p id={category.descId} className="mt-2 max-w-xs text-sm leading-6 text-velmora-cream/78 opacity-0 transition duration-500 group-hover:opacity-100">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryTiles
