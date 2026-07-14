import { Link } from 'react-router-dom'
import { categories } from '@/data/products.js'

const CategoryTiles = () => (
  <section id="collections" className="bg-velmora-cream py-16 text-velmora-ink md:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <p className="text-xs font-bold uppercase tracking-velmora text-velmora-gold">Shop by category</p>
        <h2 id="category-section-title" className="mt-3 font-serif text-5xl text-velmora-ink md:text-6xl">Golden essentials, edited</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {categories.map((category) => (
          <Link key={category.id} to="/shop" className="group relative aspect-[4/5] overflow-hidden bg-velmora-linen text-velmora-porcelain md:aspect-[3/4]">
            <img
              alt={category.name}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              data-strk-img-id={category.imgId}
              data-strk-img={`[${category.descId}] [${category.titleId}] [category-section-title]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/70 via-velmora-ink/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-center transition duration-300 md:translate-y-5 md:group-hover:translate-y-0">
              <h3 id={category.titleId} className="font-serif text-4xl text-velmora-porcelain">{category.name}</h3>
              <p id={category.descId} className="mx-auto mt-2 max-w-xs text-sm leading-6 text-velmora-linen opacity-100 md:opacity-0 md:transition md:group-hover:opacity-100">
                {category.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
)

export default CategoryTiles
